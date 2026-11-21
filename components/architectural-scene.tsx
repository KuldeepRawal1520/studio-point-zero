"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function ArchitecturalScene() {
  const [material, setMaterial] = useState("travertine");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 90, damping: 22 });
  const rotateY = useSpring(y, { stiffness: 90, damping: 22 });
  const reduced = useReducedMotion();
  return (
    <div className={`architecture architecture-${material}`}>
      <div className="scene-stage" onPointerMove={(event) => {
        if (reduced || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((.5 - (event.clientY - bounds.top) / bounds.height) * 9);
        y.set(((event.clientX - bounds.left) / bounds.width - .5) * 12);
      }} onPointerLeave={() => { x.set(0); y.set(0); }}>
        <motion.div className="room-model" style={reduced ? undefined : { rotateX, rotateY }}>
          <div className="room-floor" /><div className="room-wall" /><div className="room-side" />
          <div className="room-arch"><span /></div><div className="room-bench" />
          <div className="room-plinth" /><div className="room-orb" /><div className="room-light" />
        </motion.div>
      </div>
      <div className="scene-caption"><span>Light. Material. Possibility.</span><span>Interactive spatial study</span></div>
      <fieldset className="material-selector"><legend>Explore the material</legend>
        {["travertine", "terracotta", "sage"].map((name) => <button key={name} type="button" className={name} aria-label={name} aria-pressed={material === name} onClick={() => setMaterial(name)}><span /></button>)}
      </fieldset>
    </div>
  );
}
