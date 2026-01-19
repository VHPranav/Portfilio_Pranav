"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function BirdBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Ensure container is empty before appending new canvas
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        // --- ENGINE SETUP ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF); // Matches bg-[#FCFBF8] roughly or keeps it white as per request

        // Note: User requested it for the design landing which has bg-[#FCFBF8]. 
        // The original code uses 0xffffff (pure white). 
        // I will use 0xFCFBF8 to match the site theme seamlessly.
        scene.background = new THREE.Color(0xFCFBF8);

        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 45, 0);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const birdColor = 0x222224; // Soft black matching site theme
        const blackMat = new THREE.MeshBasicMaterial({ color: birdColor, side: THREE.DoubleSide });

        // --- BIRD FACTORY ---
        // Types for the bird object
        interface Bird {
            group: THREE.Group;
            left: { shoulder: THREE.Group; elbow: THREE.Group };
            right: { shoulder: THREE.Group; elbow: THREE.Group };
            speed: number;
            phase: number;
            alt: number;
        }

        function createSeamlessBird(): Bird {
            const birdGroup = new THREE.Group();

            // 1. REFINED SMOOTH BODY - MORE STREAMLINED
            const bodyPath = new THREE.Shape();
            bodyPath.moveTo(0, 2.2); // Pointy head
            bodyPath.bezierCurveTo(0.3, 2.0, 0.4, 1.5, 0.4, 0.8); // Neck
            bodyPath.bezierCurveTo(0.6, 0.2, 0.6, -0.2, 0.4, -0.8); // Body
            bodyPath.lineTo(0.1, -2.8); // Pointy tail tip
            bodyPath.lineTo(-0.1, -2.8);
            bodyPath.lineTo(-0.4, -0.8);
            bodyPath.bezierCurveTo(-0.6, -0.2, -0.6, 0.2, -0.4, 0.8);
            bodyPath.bezierCurveTo(-0.4, 1.5, -0.3, 2.0, 0, 2.2);

            const bodyGeo = new THREE.ShapeGeometry(bodyPath, 20);
            const body = new THREE.Mesh(bodyGeo, blackMat);
            body.rotation.x = -Math.PI / 2;
            birdGroup.add(body);

            // 2. WINGS - Using Circular Joints to prevent gaps
            function createWing(side: number) {
                const shoulder = new THREE.Group();
                const elbow = new THREE.Group();

                // INNER WING (Shoulder to Elbow)
                // We add a circular cap at the shoulder pivot (0,0)
                const innerShape = new THREE.Shape();
                const jointRadius = 0.4;

                // Start at circle top
                innerShape.absarc(0, 0, jointRadius, Math.PI / 2, -Math.PI / 2, true); // Shoulder cap
                // Curve to elbow
                innerShape.quadraticCurveTo(side * 1.5, -0.5, side * 2.8, 0); // Bottom edge
                innerShape.absarc(side * 2.8, 0, jointRadius * 0.8, -Math.PI / 2, Math.PI / 2, true); // Elbow cap
                innerShape.quadraticCurveTo(side * 1.5, 0.8, 0, jointRadius); // Top edge to start

                const innerMesh = new THREE.Mesh(new THREE.ShapeGeometry(innerShape, 20), blackMat);
                innerMesh.position.z = 0.01;
                shoulder.add(innerMesh);

                // OUTER WING (Elbow to Tip)
                // Pivot is at elbow (0,0) locally
                const outerShape = new THREE.Shape();
                const elbowRadius = jointRadius * 0.75;

                outerShape.absarc(0, 0, elbowRadius, Math.PI / 2, -Math.PI / 2, true); // Elbow joint cap
                // Long tapered wing
                outerShape.bezierCurveTo(side * 1.5, -0.2, side * 3.0, -0.5, side * 5.0, -2.5); // Tip
                outerShape.bezierCurveTo(side * 3.0, 0.2, side * 1.0, 0.8, 0, elbowRadius); // Return to top

                const outerMesh = new THREE.Mesh(new THREE.ShapeGeometry(outerShape, 20), blackMat);

                // Position elbow at the specific point defined in inner wing
                elbow.position.set(side * 2.8, 0, 0);
                elbow.add(outerMesh);

                shoulder.add(elbow);
                shoulder.rotation.x = -Math.PI / 2;
                return { shoulder, elbow };
            }

            const leftWing = createWing(1);
            const rightWing = createWing(-1);

            // Align shoulder slightly inside the body
            leftWing.shoulder.position.set(0.15, 0.5, 0);
            rightWing.shoulder.position.set(-0.15, 0.5, 0);

            // Scale down the bird significantly
            const scale = 0.15; // User requested reduction
            birdGroup.scale.set(scale, scale, scale);

            birdGroup.add(leftWing.shoulder, rightWing.shoulder);

            return { group: birdGroup, left: leftWing, right: rightWing, speed: 0, phase: 0, alt: 0 };
        }

        // --- FLOCKING LOGIC ---
        const birds: Bird[] = [];
        // Increased count for smaller birds to maintain density
        for (let i = 0; i < 15; i++) {
            const b = createSeamlessBird();
            b.speed = 0.05 + Math.random() * 0.04;
            b.phase = Math.random() * Math.PI * 2;

            // Randomize styling slightly for variety
            const scale = 0.08 + Math.random() * 0.06; // Varied sizes 0.12 - 0.20
            b.group.scale.set(scale, scale, scale);

            // Initial Scatter (Visible Screen)
            // Spread X: -30 to 50
            // Spread Z: -30 to 20
            // Spread Y: varied depths
            b.group.position.set(
                (Math.random() * 80) - 30,
                -10 + Math.random() * 35,
                (Math.random() * 50) - 30
            );

            b.group.rotation.y = Math.PI * 0.8 + (Math.random() * 0.2 - 0.1);

            scene.add(b.group);
            birds.push(b);
        }

        function resetBird(b: Bird) {
            // Spread them more organically
            const xOffset = Math.random() * 100;
            const zOffset = Math.random() * 60;

            b.group.position.set(20 + xOffset, -10 + Math.random() * 35, -20 - zOffset);

            // Varied rotation for natural feel
            b.group.rotation.y = Math.PI * 0.8 + (Math.random() * 0.2 - 0.1);
        }

        // --- ANIMATION LOOP ---
        let animationId: number;
        function animate() {
            animationId = requestAnimationFrame(animate);
            const time = performance.now() * 0.001;

            birds.forEach(b => {
                // Constant speed
                b.group.position.x -= b.speed;
                b.group.position.z += b.speed * 0.8;

                // Constant flap speed
                const flapSpeed = 4;
                // Shoulder rotates on Y (which is vertical in this local space)
                const sRot = Math.sin(time * flapSpeed + b.phase) * 0.5;
                const eRot = Math.sin(time * flapSpeed + b.phase - 0.7) * 0.4;

                b.left.shoulder.rotation.y = sRot;
                b.left.elbow.rotation.y = eRot;
                b.right.shoulder.rotation.y = -sRot;
                b.right.elbow.rotation.y = -eRot;

                // Loop reset
                if (b.group.position.x < -40) resetBird(b);
            });

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);

            // Cleanup
            renderer.dispose();
            // Traverse and dispose all objects
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
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                // Using a mix-blend-mode could be cool, but user didn't ask. 
                // Keeping it standard.
                opacity: 0.6 // Making it slightly subtle as a background
            }}
        />
    );
}
