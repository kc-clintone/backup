import { useEffect, useRef } from "react";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export default function HeroOrbitCarousel({
  images,
  visibleCount = 10, 
  speed = 0.05,      
  className = "",
}) {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !images?.length) return;

    // Reset refs length when images/visibleCount changes
    cardRefs.current = cardRefs.current.slice(0, visibleCount);

    let raf = 0;
    let last = performance.now();
    let phase = 0; 

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      // left -> right
      phase = (phase + speed * dt) % 1;

      const { width: w, height: h } = wrap.getBoundingClientRect();
      if (!w || !h) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const cx = w / 2;

      // only the top semicircle is visible
      const cy = h * 1.15;                 
      const r = Math.min(w * 0.47, h * 1);

      // Layout cards evenly across the top semicircle
      const n = Math.min(visibleCount, images.length);

      for (let i = 0; i < n; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // "t" is the logical position 0..1 across the arc for this card.
        const t = (i / (n - 1) + phase) % 1;
        const a = Math.PI * (1 - t);         // maps t=0->π (left), t=1->0 (right)

        // Position on semicircle
        const x = cx + r * Math.cos(a);
        const y = cy - r * Math.sin(a); 

        // Depth effect: strongest at top center (t ~ 0.5)
        const centerBoost = 1 - Math.abs(t - 0.5) / 0.5; // 0..1
        const scale = 0.75 + centerBoost * 0.45;
        const z = Math.round(10 + centerBoost * 90);

        // Dynamic edge fade: fade near ends (t near 0 or 1)
        const edge = Math.min(t, 1 - t); 
        const fade = clamp(edge / 0.18, 0, 1); 
        const opacity = 0.15 + fade * 0.85;

        el.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(z);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [images, visibleCount, speed]);

  if (!images?.length) return null;

  const cards = images.slice(0, Math.min(visibleCount, images.length));

  return (
    <div
      ref={wrapRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
    >
      {cards.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          ref={(el) => (cardRefs.current[i] = el)}
          className="absolute rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.55)] will-change-transform"
          style={{
            width: "clamp(88px, 10vw, 140px)",
            height: "clamp(120px, 14vw, 190px)",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover block"
            loading="lazy"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
