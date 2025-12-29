"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface LightGlassProps {
    objectCount?: number
    ringRadius?: number
    tiltX?: number
    tiltZ?: number
    className?: string
}

export default function LightGlass({
    objectCount = 10,
    ringRadius = 4.2,
    tiltX = 35,
    tiltZ = 30,
    className = ""
}: LightGlassProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight

        // --- 1. Setup ---
        const scene = new THREE.Scene()
        // Soft white/blueish grey background
        scene.background = new THREE.Color(0xFCFBF8)
        // Add some fog to blend depth seamlessly
        scene.fog = new THREE.Fog(0xFCFBF8, 10, 25)

        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
        camera.position.z = 16

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.3 // Bright exposure

        containerRef.current.appendChild(renderer.domElement)

        // --- 3. The "Clean Glass" Material ---
        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,        // White base
            transmission: 1.0,      // Fully transparent
            opacity: 1.0,
            metalness: 0.0,
            roughness: 0.0,         // Perfect mirror/glass finish
            ior: 1.7,               // High index of refraction (diamond/crystal look)
            thickness: 1.5,
            specularIntensity: 1.0,
            envMapIntensity: 1.0,
            side: THREE.DoubleSide,

            // This creates the blueish purple edges seen in the image
            attenuationColor: new THREE.Color(0xccccff), // Light purple/blue
            attenuationDistance: 1.0
        })

        const geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.1, 64)

        // Hierarchy for Rotation
        const tiltGroup = new THREE.Group()
        tiltGroup.rotation.x = THREE.MathUtils.degToRad(tiltX)
        tiltGroup.rotation.z = THREE.MathUtils.degToRad(tiltZ)
        scene.add(tiltGroup)

        const ringGroup = new THREE.Group()
        tiltGroup.add(ringGroup)

        const discs: THREE.Mesh[] = []

        for (let i = 0; i < objectCount; i++) {
            const mesh = new THREE.Mesh(geometry, glassMaterial)

            const angle = (i / objectCount) * Math.PI * 2

            mesh.position.x = Math.cos(angle) * ringRadius
            mesh.position.y = Math.sin(angle) * ringRadius

            mesh.rotation.x = Math.random() * Math.PI
            mesh.rotation.z = Math.random() * Math.PI

            // Store user data on the mesh
            mesh.userData = {
                angle: angle,
                rotSpeedX: (Math.random() - 0.5) * 0.02,
                rotSpeedY: (Math.random() - 0.5) * 0.02,
                floatSpeed: Math.random() * 0.5 + 0.5,
                floatOffset: Math.random() * 10
            }

            ringGroup.add(mesh)
            discs.push(mesh)
        }

        // --- 4. High-Key Studio Lighting ---

        // Ambient light (base brightness)
        const ambient = new THREE.AmbientLight(0xffffff, 0.8)
        scene.add(ambient)

        // Main soft white light from top-left
        const mainLight = new THREE.DirectionalLight(0xffffff, 3)
        mainLight.position.set(5, 10, 10)
        scene.add(mainLight)

        // Cool Blue Rim Light (Bottom Left) - gives that blue edge tint
        const blueLight = new THREE.DirectionalLight(0xaaaaff, 4)
        blueLight.position.set(-5, -5, 2)
        scene.add(blueLight)

        // Subtle Purple Rim Light (Top Right)
        const purpleLight = new THREE.DirectionalLight(0xffccff, 2)
        purpleLight.position.set(5, 5, -2)
        scene.add(purpleLight)

        // --- 5. Animation ---
        const clock = new THREE.Clock()
        let animationId: number

        function animate() {
            animationId = requestAnimationFrame(animate)
            const time = clock.getElapsedTime()

            // Rotate entire group
            ringGroup.rotation.z = time * 0.15

            // Animate discs
            discs.forEach((disc) => {
                disc.rotation.x += disc.userData.rotSpeedX
                disc.rotation.y += disc.userData.rotSpeedY

                // Gentle floating radius
                const float = Math.sin(time * disc.userData.floatSpeed + disc.userData.floatOffset) * 0.2

                const r = ringRadius + float
                const a = disc.userData.angle

                disc.position.x = Math.cos(a) * r
                disc.position.y = Math.sin(a) * r
            })

            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            if (!containerRef.current) return
            const width = containerRef.current.clientWidth
            const height = containerRef.current.clientHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationId)

            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }

            geometry.dispose()
            glassMaterial.dispose()
            renderer.dispose()
        }
    }, [objectCount, ringRadius, tiltX, tiltZ])

    return <div ref={containerRef} className={`w-full h-full block ${className}`} />
}
