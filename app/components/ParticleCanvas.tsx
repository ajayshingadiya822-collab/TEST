'use client';

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let animId: number;

    const isDark = () =>
      document.documentElement.getAttribute('data-theme') !== 'light';

    class Particle {
      x!: number; y!: number; vx!: number; vy!: number;
      r!: number; a!: number; color!: string;
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.3;
        this.a = Math.random() * 0.6 + 0.1;
        const palette = isDark()
          ? ['99,102,241', '168,85,247', '6,182,212']
          : ['99,102,241', '168,85,247'];
        this.color = palette[Math.floor(Math.random() * palette.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${this.color},${this.a})`;
        ctx!.fill();
      }
    }

    let particles: Particle[] = [];

    const resize = () => {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const COUNT = Math.min(180, Math.floor((window.innerWidth * window.innerHeight) / 7000));
    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    const MAX_DIST = 120;
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * (isDark() ? 0.15 : 0.08);
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = isDark()
              ? `rgba(99,102,241,${alpha})`
              : `rgba(99,102,241,${alpha * 0.5})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach((p) => { p.update(); p.draw(); });
      drawLines();
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}
