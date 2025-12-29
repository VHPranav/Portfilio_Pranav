"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WaveParticlesProps {
    particleCount?: number;
    particleSize?: number;
    scatterRadius?: number;
    shapeScale?: number;
    lerpSpeed?: number;
    colorIdle?: string;
    colorActive?: string;
    backgroundColor?: string;
    showInstruction?: boolean;
    className?: string;
}

export default function WaveParticles({
    particleCount = 4000,
    particleSize = 1,
    scatterRadius = 40,
    shapeScale = 6,
    lerpSpeed = 0.08,
    colorIdle = '#222222',
    colorActive = '#3b82f6',
    backgroundColor = '#ffffff',
    showInstruction = true,
    className = ''
}: WaveParticlesProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isHoveredRef = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(backgroundColor);

        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- DATA ARRAYS ---
        const positions = new Float32Array(particleCount * 3);
        const origins = new Float32Array(particleCount * 3);
        const targets = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const COLOR_IDLE = new THREE.Color(colorIdle);
        const COLOR_ACTIVE = new THREE.Color(colorActive);

        const rand = (min: number, max: number) => Math.random() * (max - min) + min;

        // --- 1. GENERATE ORIGINS (SCATTER) ---
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            origins[i3] = rand(-scatterRadius, scatterRadius);
            origins[i3 + 1] = rand(-scatterRadius, scatterRadius);
            origins[i3 + 2] = 0;

            positions[i3] = origins[i3];
            positions[i3 + 1] = origins[i3 + 1];
            positions[i3 + 2] = origins[i3 + 2];

            colors[i3] = COLOR_IDLE.r;
            colors[i3 + 1] = COLOR_IDLE.g;
            colors[i3 + 2] = COLOR_IDLE.b;
        }

        // --- 2. GENERATE TARGETS (THICK BORDERED CODE BRACKETS) ---
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            let x, y;

            // Width of the bracket stroke
            const strokeWidth = 0.8;
            const jitter = () => rand(-0.2, 0.2);

            if (i < particleCount / 2) {
                // Left Bracket < with borders
                const isTopLine = Math.random() > 0.5;
                const t = Math.random();

                // Determine if particle is on inner or outer edge
                const edgeOffset = (Math.random() > 0.5 ? strokeWidth : -strokeWidth) * 0.5;

                if (isTopLine) {
                    // Top line of < (going from top-middle down to left-middle)
                    x = (-0.5 + t * (-1.0)) * shapeScale + jitter();
                    y = (1.0 + t * (-1.0)) * shapeScale + jitter();
                    // Add perpendicular offset for border thickness
                    const angle = Math.atan2(-1.0, -1.0);
                    x += Math.sin(angle) * edgeOffset;
                    y -= Math.cos(angle) * edgeOffset;
                } else {
                    // Bottom line of < (going from left-middle down to bottom-middle)
                    x = (-1.5 + t * (1.0)) * shapeScale + jitter();
                    y = (0.0 + t * (-1.0)) * shapeScale + jitter();
                    // Add perpendicular offset for border thickness
                    const angle = Math.atan2(-1.0, 1.0);
                    x += Math.sin(angle) * edgeOffset;
                    y -= Math.cos(angle) * edgeOffset;
                }
            } else {
                // Right Bracket > with borders
                const isTopLine = Math.random() > 0.5;
                const t = Math.random();

                // Determine if particle is on inner or outer edge
                const edgeOffset = (Math.random() > 0.5 ? strokeWidth : -strokeWidth) * 0.5;

                if (isTopLine) {
                    // Top line of > (going from top-middle down to right-middle)
                    x = (0.5 + t * (1.0)) * shapeScale + jitter();
                    y = (1.0 + t * (-1.0)) * shapeScale + jitter();
                    // Add perpendicular offset for border thickness
                    const angle = Math.atan2(-1.0, 1.0);
                    x += Math.sin(angle) * edgeOffset;
                    y -= Math.cos(angle) * edgeOffset;
                } else {
                    // Bottom line of > (going from right-middle down to bottom-middle)
                    x = (1.5 + t * (-1.0)) * shapeScale + jitter();
                    y = (0.0 + t * (-1.0)) * shapeScale + jitter();
                    // Add perpendicular offset for border thickness
                    const angle = Math.atan2(-1.0, -1.0);
                    x += Math.sin(angle) * edgeOffset;
                    y -= Math.cos(angle) * edgeOffset;
                }
            }

            targets[i3] = x;
            targets[i3 + 1] = y;
            targets[i3 + 2] = 0;
        }

        // --- GEOMETRY & MATERIAL ---
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: particleSize,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: false
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // --- MOUSE LOGIC ---
        const handleMouseMove = () => {
            isHoveredRef.current = true;
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
        };

        containerRef.current.addEventListener('mousemove', handleMouseMove);
        containerRef.current.addEventListener('mouseleave', handleMouseLeave);

        // --- ANIMATION ---
        const clock = new THREE.Clock();
        let animationFrameId: number;

        function animate() {
            animationFrameId = requestAnimationFrame(animate);

            const time = clock.getElapsedTime();
            const positionAttribute = particles.geometry.attributes.position;
            const colorAttribute = particles.geometry.attributes.color;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;

                let tx, ty, tz;
                let tr, tg, tb;

                if (isHoveredRef.current) {
                    // --- HOVER STATE: Snap to Code Shape ---
                    tx = targets[i3];
                    ty = targets[i3 + 1];
                    tz = targets[i3 + 2];

                    tr = COLOR_ACTIVE.r;
                    tg = COLOR_ACTIVE.g;
                    tb = COLOR_ACTIVE.b;
                } else {
                    // --- IDLE STATE: 3D Wave Pattern ---
                    const originalX = origins[i3];
                    const originalY = origins[i3 + 1];

                    // Create multiple wave layers for 3D ribbon effect
                    const primaryWaveY = Math.sin(time * 1.5 + originalX * 0.15) * 2.5;
                    const secondaryWaveY = Math.cos(time * 1.0 + originalX * 0.1) * 1.5;

                    // Add horizontal wave motion for width
                    const waveX = Math.cos(time * 1.2 + originalY * 0.15) * 1.8;

                    // Create depth with Z-axis variation for 3D effect
                    const waveZ = Math.sin(time * 1.8 + originalX * 0.12 + originalY * 0.08) * 4.0
                        + Math.cos(time * 0.8 + originalX * 0.08) * 2.5;

                    tx = originalX + waveX;
                    ty = originalY + primaryWaveY + secondaryWaveY;
                    tz = waveZ;

                    tr = COLOR_IDLE.r;
                    tg = COLOR_IDLE.g;
                    tb = COLOR_IDLE.b;
                }

                // --- UPDATE POSITION (LERP) ---
                positionAttribute.array[i3] += (tx - positionAttribute.array[i3]) * lerpSpeed;
                positionAttribute.array[i3 + 1] += (ty - positionAttribute.array[i3 + 1]) * lerpSpeed;
                positionAttribute.array[i3 + 2] += (tz - positionAttribute.array[i3 + 2]) * lerpSpeed;

                // --- UPDATE COLOR ---
                colorAttribute.array[i3] += (tr - colorAttribute.array[i3]) * (lerpSpeed * 0.5);
                colorAttribute.array[i3 + 1] += (tg - colorAttribute.array[i3 + 1]) * (lerpSpeed * 0.5);
                colorAttribute.array[i3 + 2] += (tb - colorAttribute.array[i3 + 2]) * (lerpSpeed * 0.5);
            }

            positionAttribute.needsUpdate = true;
            colorAttribute.needsUpdate = true;

            renderer.render(scene, camera);
        }

        animate();

        // --- RESIZE ---
        const handleResize = () => {
            if (!containerRef.current) return;
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // --- CLEANUP ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', handleMouseMove);
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
                if (containerRef.current.contains(renderer.domElement)) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [particleCount, particleSize, scatterRadius, shapeScale, lerpSpeed, colorIdle, colorActive, backgroundColor]);

    return (
        <div className={`relative ${className}`}>
            <div ref={containerRef} className="w-full h-full" />
            {showInstruction && (
                <div className="absolute top-5 w-full text-center text-gray-400 pointer-events-none uppercase tracking-wider text-xs">
                    Hover
                </div>
            )}
        </div>
    );
}
