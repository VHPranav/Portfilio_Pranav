"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LeafBurstProps {
    onComplete?: () => void;
}

export default function LeafBurst({ onComplete }: LeafBurstProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- 1. TEXTURE GENERATION ---
        function createLeafTexture() {
            const size = 512;
            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            if (!ctx) return null;

            // Draw a white leaf shape
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(size / 2, size); // Stem
            ctx.bezierCurveTo(size * 0.1, size * 0.8, 0, size * 0.3, size * 0.2, size * 0.2);
            ctx.bezierCurveTo(size * 0.4, size * 0.4, size * 0.6, size * 0.4, size * 0.6, size * 0.2);
            ctx.bezierCurveTo(size, size * 0.3, size * 0.9, size * 0.8, size / 2, size);
            ctx.fill();

            // Veins
            ctx.strokeStyle = "rgba(0,0,0,0.2)";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(size / 2, size);
            ctx.lineTo(size / 2, size * 0.2);
            ctx.stroke();

            return new THREE.CanvasTexture(canvas);
        }

        // --- 2. SCENE SETUP ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const container = containerRef.current;
        if (container) {
            container.appendChild(renderer.domElement);
        }

        // --- 3. LIGHTING ---
        const ambient = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambient);
        const dirLight = new THREE.DirectionalLight(0xffaa55, 1.5);
        dirLight.position.set(0, 10, 10);
        scene.add(dirLight);

        // --- 4. LEAVES SETUP ---
        const LEAF_COUNT = 150;
        const PALETTE = [
            new THREE.Color(0xDCECF6),
            new THREE.Color(0xE4F1F8),
            new THREE.Color(0xEEF4F8),
            new THREE.Color(0xDFE8F0),
            new THREE.Color(0xEAF2F7),
            new THREE.Color(0xFF6B6B),
            new THREE.Color(0xFFA500)
        ];

        const geometry = new THREE.PlaneGeometry(1, 1.2, 2, 2);
        const pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const z = Math.pow(x, 2) * 0.5;
            pos.setZ(i, z);
        }

        const leafTexture = createLeafTexture();
        if (!leafTexture) return;

        const material = new THREE.MeshStandardMaterial({
            map: leafTexture,
            alphaMap: leafTexture,
            transparent: true,
            side: THREE.DoubleSide,
            roughness: 0.7,
            metalness: 0.1,
        });

        const mesh = new THREE.InstancedMesh(geometry, material, LEAF_COUNT);
        scene.add(mesh);

        // Physics
        const leaves: any[] = [];
        for (let i = 0; i < LEAF_COUNT; i++) {
            const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
            mesh.setColorAt(i, color);

            const scale = 0.8 + Math.random() * 0.8;

            leaves.push({
                idx: i,
                pos: new THREE.Vector3(
                    (Math.random() - 0.5) * 40,
                    20 + Math.random() * 20,
                    (Math.random() - 0.5) * 20
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.5,
                    -(0.5 + Math.random() * 1.0),
                    (Math.random() - 0.5) * 0.5
                ),
                rotationSpeed: new THREE.Vector3(
                    Math.random() * 0.1,
                    Math.random() * 0.1,
                    Math.random() * 0.1
                ),
                currentRot: new THREE.Euler(Math.random(), Math.random(), Math.random()),
                scale: new THREE.Vector3(scale, scale, scale)
            });
        }

        // --- 5. ANIMATION LOOP ---
        const dummy = new THREE.Object3D();
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            leaves.forEach(leaf => {
                leaf.pos.add(leaf.velocity);

                leaf.currentRot.x += leaf.rotationSpeed.x;
                leaf.currentRot.y += leaf.rotationSpeed.y;
                leaf.currentRot.z += leaf.rotationSpeed.z;

                dummy.position.copy(leaf.pos);
                dummy.rotation.copy(leaf.currentRot);
                dummy.scale.copy(leaf.scale);
                dummy.updateMatrix();
                mesh.setMatrixAt(leaf.idx, dummy.matrix);
            });

            mesh.instanceMatrix.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            if (!containerRef.current) return;
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            leafTexture.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{ background: "transparent" }}
        />
    );
}
