"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Matter from 'matter-js'

const BALL_COUNT = 60
const PALETTE = [
    0x222222,
    0x444444,
    0x666666,
    0x888888,
    0xaaaaaa,
]

export const ScrollDropBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const engineRef = useRef<Matter.Engine | null>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
    const ballsRef = useRef<{ mesh: THREE.Mesh; body: Matter.Body }[]>([])
    const mouseBodyRef = useRef<Matter.Body | null>(null)
    const wallsRef = useRef<{ ground: Matter.Body; left: Matter.Body; right: Matter.Body } | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Ensure container is empty before appending new canvas
        while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
        }

        let width = window.innerWidth
        let height = window.innerHeight

        // --- Three.js Setup ---
        const scene = new THREE.Scene()
        scene.background = null // Transparent
        sceneRef.current = scene

        const camera = new THREE.OrthographicCamera(
            width / -2, width / 2,
            height / 2, height / -2,
            1, 1000
        )
        camera.position.z = 10
        cameraRef.current = camera

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        containerRef.current.appendChild(renderer.domElement)
        rendererRef.current = renderer

        // --- Matter.js Setup ---
        const engine = Matter.Engine.create({
            enableSleeping: false // Disable sleeping for better interaction
        })
        engine.world.gravity.y = 1.0 // Slightly reduced gravity for floatier feel
        engineRef.current = engine

        const wallOptions = { isStatic: true, visible: false }
        const ground = Matter.Bodies.rectangle(0, height / 2 + 100, width * 2, 200, wallOptions)
        const leftWall = Matter.Bodies.rectangle(-width / 2 - 100, 0, 200, height * 10, wallOptions)
        const rightWall = Matter.Bodies.rectangle(width / 2 + 100, 0, 200, height * 10, wallOptions)

        wallsRef.current = { ground, left: leftWall, right: rightWall }
        Matter.World.add(engine.world, [ground, leftWall, rightWall])

        // --- Mouse Interaction Body ---
        const mouseCollider = Matter.Bodies.circle(0, 0, 80, {
            isStatic: true,
            render: { visible: false }
        })
        Matter.World.add(engine.world, mouseCollider)
        mouseBodyRef.current = mouseCollider

        // --- Create Balls ---
        const balls: { mesh: THREE.Mesh; body: Matter.Body }[] = []
        for (let i = 0; i < BALL_COUNT; i++) {
            const isRing = Math.random() < 0.3
            const radius = Math.random() < 0.2 ? (40 + Math.random() * 40) : (15 + Math.random() * 20)
            const x = (Math.random() - 0.5) * width * 0.8
            // Start way above the screen
            const y = -height / 2 - 200 - (Math.random() * 2000)

            const body = Matter.Bodies.circle(x, y, radius, {
                restitution: 0.6,
                friction: 0.1,
                frictionAir: 0.01,
            })
            // IMPORTANT: Balls start sleeping or static so they don't fall until scrolled
            Matter.Sleeping.set(body, true)

            Matter.World.add(engine.world, body)

            // Visuals
            const color = PALETTE[Math.floor(Math.random() * PALETTE.length)]
            const material = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide
            })

            let geometry
            if (isRing) {
                // Ring geometry: innerRadius, outerRadius, thetaSegments
                geometry = new THREE.RingGeometry(radius * 0.6, radius, 32)
            } else {
                geometry = new THREE.CircleGeometry(radius, 32)
            }

            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)

            balls.push({ mesh, body })
        }
        ballsRef.current = balls

        // --- Animation Loop ---
        let animationFrameId: number
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            Matter.Engine.update(engine, 1000 / 60)

            balls.forEach(item => {
                item.mesh.position.x = item.body.position.x
                item.mesh.position.y = -item.body.position.y // Three.js Y is up, Matter is down
                item.mesh.rotation.z = -item.body.angle
            })

            renderer.render(scene, camera)
        }
        animate()

        // --- Interactions ---

        const handleMouseMove = (e: MouseEvent) => {
            const matterX = e.clientX - window.innerWidth / 2
            const matterY = e.clientY - window.innerHeight / 2

            if (mouseBodyRef.current) {
                Matter.Body.setPosition(mouseBodyRef.current, { x: matterX, y: matterY })
            }
        }

        // --- Logic: Trigger Drop progressively based on scroll ---
        let lastReleasedIndex = -1
        const checkScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight
            const winHeight = window.innerHeight
            const scrollableHeight = docHeight - winHeight

            if (scrollableHeight <= 0) return

            const scrollProgress = Math.min(Math.max(scrollTop / scrollableHeight, 0), 1)

            const ease = scrollProgress

            const targetReleaseCount = Math.floor(ease * BALL_COUNT)

            if (targetReleaseCount > lastReleasedIndex) {
                for (let i = lastReleasedIndex + 1; i <= targetReleaseCount; i++) {
                    if (balls[i]) {
                        Matter.Sleeping.set(balls[i].body, false)
                        // tiny random push
                        Matter.Body.setVelocity(balls[i].body, {
                            x: (Math.random() - 0.5) * 5,
                            y: (Math.random() * 5)
                        })
                    }
                }
                lastReleasedIndex = targetReleaseCount
            }
        }

        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current || !wallsRef.current) return;

            width = window.innerWidth
            height = window.innerHeight

            cameraRef.current.left = width / -2
            cameraRef.current.right = width / 2
            cameraRef.current.top = height / 2
            cameraRef.current.bottom = height / -2
            cameraRef.current.updateProjectionMatrix()

            rendererRef.current.setSize(width, height)

            if (wallsRef.current) {
                Matter.Body.setPosition(wallsRef.current.ground, { x: 0, y: height / 2 + 100 })
                Matter.Body.setPosition(wallsRef.current.right, { x: width / 2 + 100, y: 0 })
                Matter.Body.setPosition(wallsRef.current.left, { x: -width / 2 - 100, y: 0 })
            }
        }

        window.addEventListener('scroll', checkScroll)
        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)

        // Initial check in case page is already scrolled
        checkScroll()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('scroll', checkScroll)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)

            // Cleanup Three.js
            renderer.dispose()
            balls.forEach(b => {
                b.mesh.geometry.dispose()
                if (Array.isArray(b.mesh.material)) {
                    b.mesh.material.forEach(m => m.dispose())
                } else {
                    b.mesh.material.dispose()
                }
            })

            Matter.World.clear(engine.world, false)
            Matter.Engine.clear(engine)

            if (containerRef.current && renderer.domElement) {
                // No need to manually remove child here as we do it on mount
                // But keeping it for safety if unmount happens cleanly
                if (containerRef.current.contains(renderer.domElement)) {
                    containerRef.current.removeChild(renderer.domElement)
                }
            }

            // Traverse and dispose all objects scene-wide for completeness
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    if (Array.isArray(object.material)) {
                        object.material.forEach((m: any) => m.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.1 }}
        />
    )
}
