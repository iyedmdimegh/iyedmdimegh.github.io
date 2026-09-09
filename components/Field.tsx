'use client';

import { useEffect, useRef } from 'react';

/**
 * The node field: scale one of the world's single drawing.
 *
 * Magenta nodes, cyan edges, on the void — the same language as the graph
 * explorer this site exists to show. Proximity brightens the edges nearest the
 * pointer, which reveals local structure rather than trailing the cursor; there
 * is no follower, no blob, and on a touch device the field simply drifts.
 *
 * Colors are read from the CSS custom properties so the canvas follows the
 * theme instead of keeping its own second palette.
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hub: boolean;
  pulse: number;
}

const LINK_DIST = 132;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const NEAR_SQ = 108 * 108;

export function Field({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const host = canvas.parentElement;
    if (!host) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(pointer: fine)');

    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const palette = () => {
      const cs = getComputedStyle(document.documentElement);
      return {
        edge: cs.getPropertyValue('--edge').trim() || 'rgba(53,196,232,.28)',
        live: cs.getPropertyValue('--edge-live').trim() || 'rgba(255,61,139,.68)',
        node: cs.getPropertyValue('--magenta').trim() || '#ff3d8b',
        hub: cs.getPropertyValue('--cyan').trim() || '#35c4e8',
        alpha: Number.parseFloat(cs.getPropertyValue('--node-alpha')) || 0.62,
      };
    };
    let colors = palette();

    const seed = () => {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density tracks area, so a wide desktop field is not sparse and a phone
      // is not a soup of overlapping links.
      const count = Math.round(Math.min(Math.max((w * h) / 12000, 22), 88));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: 1 + Math.random() * 2.1,
        hub: Math.random() < 0.28,
        pulse: 0,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 >= LINK_DIST_SQ) continue;

          const mx = (a.x + b.x) / 2 - pointer.x;
          const my = (a.y + b.y) / 2 - pointer.y;
          const near = mx * mx + my * my < NEAR_SQ;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = near ? colors.live : colors.edge;
          ctx.globalAlpha = 1 - Math.sqrt(d2) / LINK_DIST;
          ctx.lineWidth = near ? 1.15 : 0.65;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      for (const p of nodes) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + p.pulse * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = p.hub ? colors.hub : colors.node;
        ctx.globalAlpha = colors.alpha + p.pulse * (1 - colors.alpha);
        ctx.fill();

        if (p.pulse > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + p.pulse * 17, 0, Math.PI * 2);
          ctx.strokeStyle = p.hub ? colors.hub : colors.node;
          ctx.globalAlpha = p.pulse * 0.42;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
    };

    const step = () => {
      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        if (p.pulse > 0) p.pulse -= 0.018;
      }
      draw();
      if (running) raf = requestAnimationFrame(step);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!fine.matches) return;
      const rect = host.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onPointerDown = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const p of nodes) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        if (dx * dx + dy * dy < 15000) p.pulse = 1;
      }
      if (reduced.matches) draw();
    };

    // The field holds its last frame off-screen instead of burning a rAF loop
    // behind ten sections of content.
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry?.isIntersecting ?? false;
        if (visible && !running && !reduced.matches) {
          running = true;
          raf = requestAnimationFrame(step);
        } else if (!visible && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );

    const onResize = () => {
      seed();
      draw();
    };
    const onTheme = () => {
      colors = palette();
      draw();
    };

    seed();
    draw();

    if (!reduced.matches) {
      raf = requestAnimationFrame(step);
      io.observe(host);
    } else {
      running = false;
    }

    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerleave', onPointerLeave);
    host.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('resize', onResize);

    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      themeObserver.disconnect();
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      host.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
