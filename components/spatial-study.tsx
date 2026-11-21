"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const studies = [
  { id: "light", label: "Light", title: "Let the room breathe.", description: "An opening, a soft shadow, a moment of warmth. Light brings a space to life before anything is placed inside it.", note: "An opening towards the light" },
  { id: "proportion", label: "Proportion", title: "Give every gesture room.", description: "A generous passage. A quieter corner. We consider the relationship between objects and the space around them.", note: "Room to move, room to pause" },
  { id: "material", label: "Material", title: "Bring warmth into focus.", description: "Stone, timber and fabric work together through contrast. A few considered finishes can give a room its own character.", note: "A warmer material balance" },
] as const;

export function SpatialStudy() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const study = studies[active];
  return (
    <section className={`spatial-study study-${study.id}`} aria-labelledby="spatial-title">
      <div className="wrap spatial-layout">
        <div className="spatial-copy">
          <p className="eyebrow">Design philosophy</p><h2 id="spatial-title">A little less.<br /><em>A little more considered.</em></h2>
          <div className="spatial-controls" role="group" aria-label="Explore a design principle">
            {studies.map((item, index) => <button key={item.id} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>{item.label}</button>)}
          </div>
          <div className="spatial-story" aria-live="polite" aria-atomic="true"><h3>{study.title}</h3><p>{study.description}</p></div>
        </div>
        <div className="spatial-scene">
          <div className="spatial-orbit" aria-hidden="true" />
          <motion.div className="spatial-room" animate={{ rotateY: active === 1 ? -16 : -25, rotateX: active === 1 ? 16 : 9 }} transition={{ duration: reduced ? 0 : 1, ease: "easeInOut" }} aria-hidden="true">
            <div className="study-floor" /><div className="study-back" /><div className="study-side" /><div className="study-window" /><div className="study-daylight" />
            <div className="study-seat" /><div className="study-seat-back" /><div className="study-table" /><div className="study-vase" />
          </motion.div>
          <p className="spatial-scene-note">{study.note}</p>
          <span className="spatial-label">Interactive spatial study</span>
        </div>
      </div>
    </section>
  );
}
