"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Polvere di scena: particelle fluttuanti stile riflettori da circo
export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    const count = 900;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      speeds[i] = 0.15 + Math.random() * 0.45;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xc9a15c,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mouseX = 0;
    const onMouse = (e) => { mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6; };
    window.addEventListener("mousemove", onMouse);

    const clock = new THREE.Clock();
    let rafId;
    const animate = () => {
      const t = clock.getElapsedTime();
      const pos = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.0012;
        pos[i * 3] += Math.cos(t * speeds[i] * 0.7 + i) * 0.0008;
      }
      geo.attributes.position.needsUpdate = true;
      points.rotation.y += (mouseX - points.rotation.y) * 0.02;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
