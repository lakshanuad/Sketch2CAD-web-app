"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    // Add subtle ambient background fog for depth
    scene.fog = new THREE.FogExp2(0x050811, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 12;

    // 2. Renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    // 3. Floating Wireframe Geometries (Ultra Low Poly)
    const shapesGroup = new THREE.Group();

    // Material definitions (unlit, zero lighting computations, low opacity)
    const cyanMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });

    const blueMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });

    const tealMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.10,
    });

    // Create 6 distinct low-poly geometries
    const geometries = [
      new THREE.IcosahedronGeometry(2.2, 0), // 20 faces
      new THREE.OctahedronGeometry(1.8, 0),   // 8 faces
      new THREE.TorusGeometry(1.6, 0.5, 8, 16), // Torus ring
      new THREE.BoxGeometry(2, 2, 2),        // Cube
      new THREE.ConeGeometry(1.6, 2.8, 5),   // Pyramid cone
      new THREE.TetrahedronGeometry(2, 0),   // 4 faces
    ];

    const materials = [cyanMaterial, blueMaterial, tealMaterial];

    // Position objects around screen in 3D space
    const initialPositions = [
      { x: -6.5, y: 3.5, z: -2, rx: 0.005, ry: 0.008, speed: 0.8 },
      { x: 7, y: 4, z: -3, rx: 0.007, ry: 0.004, speed: 1.1 },
      { x: -7.5, y: -3.5, z: -1, rx: 0.004, ry: 0.006, speed: 0.9 },
      { x: 6.5, y: -4, z: -4, rx: 0.006, ry: 0.009, speed: 0.7 },
      { x: 0, y: 5.5, z: -6, rx: 0.008, ry: 0.005, speed: 1.0 },
      { x: -1, y: -5.5, z: -5, rx: 0.005, ry: 0.007, speed: 1.2 },
    ];

    const meshes: {
      mesh: THREE.Mesh;
      rx: number;
      ry: number;
      baseY: number;
      speed: number;
    }[] = [];

    initialPositions.forEach((pos, idx) => {
      const geo = geometries[idx % geometries.length];
      const mat = materials[idx % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(pos.x, pos.y, pos.z);
      shapesGroup.add(mesh);

      meshes.push({
        mesh,
        rx: pos.rx,
        ry: pos.ry,
        baseY: pos.y,
        speed: pos.speed,
      });
    });

    scene.add(shapesGroup);

    // 4. Mouse Parallax (subtle tilt)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 0.8;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Animation Loop with Pause on Visibility Change
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      shapesGroup.rotation.y = currentMouseX * 0.4;
      shapesGroup.rotation.x = currentMouseY * 0.4;

      // Animate individual meshes
      meshes.forEach(({ mesh, rx, ry, baseY, speed }) => {
        mesh.rotation.x += rx;
        mesh.rotation.y += ry;
        mesh.position.y = baseY + Math.sin(elapsedTime * speed) * 0.35;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Adjust camera distance for smaller mobile screens
      if (window.innerWidth < 640) {
        camera.position.z = 15;
      } else {
        camera.position.z = 12;
      }

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // 7. Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
