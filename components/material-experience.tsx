"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { demoImages } from "@/lib/demo-images";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const materials = [
  { id: "stone", name: "Stone", finish: "Honed travertine", character: "Quiet permanence.", description: "Open pores and soft mineral bands give stone its individual character. A honed finish keeps the surface calm in changing light.", use: "Explore for feature walls, floors and sculptural surfaces.", care: "Natural stone needs appropriate sealing and care." },
  { id: "timber", name: "Timber", finish: "Natural timber", character: "Warmth with a grain.", description: "Linear grain brings movement to a restrained palette. In raking light, the surface reveals a deeper, warmer rhythm.", use: "Explore for joinery, furniture and wall panelling.", care: "Finish and species influence colour, wear and maintenance." },
  { id: "metal", name: "Metal", finish: "Brushed brass", character: "A measured glimmer.", description: "A fine brushed surface catches light along its grain. Used in small moments, metal gives a room definition and contrast.", use: "Explore for handles, lighting and finely detailed accents.", care: "Unlacquered brass develops a patina over time." },
  { id: "fabric", name: "Fabric", finish: "Woven linen", character: "Softness you can see.", description: "An irregular weave diffuses the light and softens harder surfaces. Its subtle variation gives even a simple form depth.", use: "Explore for upholstery, curtains and tactile layers.", care: "Choose weave and performance to suit the way a space is used." },
] as const;

export function MaterialExperience() {
  const [selected, setSelected] = useState(0);
  const [light, setLight] = useState(55);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 100, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 25 });
  const reduced = useReducedMotion();
  const material = materials[selected];
  return (
    <section className="material-editorial" aria-labelledby="material-heading">
      <div className="wrap">
        <div className="material-heading"><p className="eyebrow">The material library</p><h2 id="material-heading">The feeling is<br />in the <em>details.</em></h2><p>Four materials. A different dialogue with light.<br />Choose a finish to explore its character.</p></div>
        <div className="material-workspace">
          <div className="material-view">
            <div className="sample-stage" onPointerMove={(event) => {
              if (reduced || event.pointerType === "touch") return;
              const rect = event.currentTarget.getBoundingClientRect();
              rotateX.set((.5 - (event.clientY - rect.top) / rect.height) * 10);
              rotateY.set(((event.clientX - rect.left) / rect.width - .5) * 12);
            }} onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}>
              <motion.div className={`material-sample sample-${material.id}`} style={{ rotateX: reduced ? 0 : springX, rotateY: reduced ? 0 : springY, boxShadow: `${35 - light * .7}px 30px ${45 - light * .25}px #080c0999` }}>
                <div className="sample-texture" />
                {material.id === "timber" && <Image className="sample-photograph" src={demoImages.timber} alt="" fill sizes="(max-width: 720px) 75vw, 40vw" />}
                {material.id === "fabric" && <Image className="sample-photograph" src={demoImages.fabric} alt="" fill sizes="(max-width: 720px) 75vw, 40vw" />}
                <div className="sample-illumination" style={{ background: `linear-gradient(${40 + light * 1.1}deg, rgba(6,12,9,${.65 - light * .004}) 0%, transparent ${25 + light * .3}%, rgba(255,239,192,${.15 + light * .004}) 70%, rgba(255,248,226,.65) 100%)` }} />
                <div className="sample-light-beam" style={{ left: `${light * .65}%`, opacity: .15 + light * .004 }} />
                <span className="sample-edge" />
              </motion.div>
            </div>
            <div className="light-control"><label htmlFor="material-light">Explore the light</label><input id="material-light" type="range" min="0" max="100" value={light} aria-valuetext={`${light}% directional light`} onChange={(event) => setLight(Number(event.target.value))} /><output htmlFor="material-light">{light < 35 ? "Soft shadow" : light > 70 ? "Direct sunlight" : "Filtered light"}</output></div>
            <p className="material-disclaimer">Illustrative finish studies · final samples vary</p>
            {material.id === "timber" && <a className="texture-credit" href="https://www.pexels.com/photo/close-up-of-wooden-texture-with-detailed-grain-patterns-36081877/">Texture · Natalia Sevruk / Pexels</a>}
            {material.id === "fabric" && <a className="texture-credit" href="https://www.pexels.com/photo/close-up-shot-of-a-beige-textile-7232409/">Texture · Artem Podrez / Pexels</a>}
          </div>
          <div className="material-information">
            <div className="material-options" role="group" aria-label="Choose a material">
              {materials.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span className={`mini-swatch sample-${item.id}`} aria-hidden="true" />{item.name}</button>)}
            </div>
            <div className="material-story" aria-live="polite" aria-atomic="true">
              <p className="eyebrow">{material.finish}</p><h3>{material.character}</h3><p>{material.description}</p>
              <p className="material-use">{material.use}</p><p className="material-care">{material.care}</p>
            </div>
            <Link className="text-link" href="/contact">Find your material palette</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

