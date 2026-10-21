"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls, Sphere, Torus } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function ObjectStudy() {
  return <PresentationControls global rotation={[0.05, -0.24, 0]} polar={[-0.2, 0.2]} azimuth={[-0.35, 0.35]} snap>
    <Float speed={1} rotationIntensity={0.12} floatIntensity={0.28}><group rotation={[0.2, 0, -0.28]}><Torus args={[1.12, 0.035, 16, 100]} rotation={[0.38, 0.15, 0.1]}><meshStandardMaterial color="#c7a981" metalness={0.72} roughness={0.25} /></Torus><Sphere args={[0.78, 48, 48]}><meshPhysicalMaterial color="#e5b8b5" roughness={0.22} metalness={0.08} clearcoat={0.8} clearcoatRoughness={0.17} /></Sphere><Torus args={[0.91, 0.009, 8, 100]} rotation={[1.2, 0.2, 0.4]}><meshStandardMaterial color="#fff4e7" metalness={0.8} roughness={0.2} /></Torus></group></Float>
  </PresentationControls>;
}

export default function Sculpture() {
  const [webgl, setWebgl] = useState(false);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      setWebgl(Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")));
    } catch {
      setWebgl(false);
    }
  }, []);

  if (!webgl) return <div className="sculpture-fallback" aria-label="Static blush and champagne sculpture"><span /></div>;
  return <div className="canvas-holder"><Canvas fallback={<div className="sculpture-fallback" aria-label="Static blush and champagne sculpture"><span /></div>} dpr={[1, 1.5]} camera={{ position: [0, 0, 4.1], fov: 38 }} gl={{ alpha: true, antialias: true }}><ambientLight intensity={1.5} /><directionalLight position={[3, 3, 4]} intensity={2.4} color="#fff4e8" /><pointLight position={[-3, -2, 2]} intensity={2} color="#e9bdc0" /><Suspense fallback={null}><ObjectStudy /><Environment preset="studio" /></Suspense></Canvas></div>;
}
