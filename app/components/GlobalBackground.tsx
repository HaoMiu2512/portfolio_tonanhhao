'use client';

import { useEffect, useRef } from 'react';

/* Floating code-rain identical to HeroSection's AnimatedBg but fixed to the viewport */
function CodeRainCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Same symbol set as HeroSection for visual consistency
        const symbolsStr = '01アイ</> {}[]()=>const function class import export async await fetch POST GET AI API LLM REST SQL';
        const symbolsArr = symbolsStr.split(' ').filter(Boolean);
        const cols = Math.floor(canvas.width / 20);
        const drops: number[] = Array(cols).fill(1);

        const draw = () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            ctx.fillStyle = isLight ? 'rgba(240,240,245,0.04)' : 'rgba(13,14,17,0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = "12px 'Share Tech Mono', monospace";

            drops.forEach((y, i) => {
                const word = symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
                const char = word ? word[Math.floor(Math.random() * word.length)] : '0';
                const rnd = Math.random();

                if (rnd > 0.97) ctx.fillStyle = '#ffffff';
                else if (rnd > 0.8) ctx.fillStyle = isLight ? '#7c3aed' : '#a855f7';
                else if (rnd > 0.6) ctx.fillStyle = isLight ? '#0284c7' : '#00d4ff';
                else ctx.fillStyle = isLight ? '#15803d' : '#39d35355';

                ctx.fillText(char, i * 20, y * 20);
                if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });

            animRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.15,
                pointerEvents: 'none',
            }}
        />
    );
}

export default function GlobalBackground() {
    return (
        /* position: fixed ensures it stays behind ALL sections while scrolling */
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            {/* Layer 1: Animated code rain */}
            <CodeRainCanvas />

            {/* Layer 2: Radial purple glow (same as HeroSection) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 90% 80% at 50% 30%, var(--kali-purple-glow) 0%, transparent 65%)',
            }} />

            {/* Layer 3: Subtle grid lines */}
            <div
                className="grid-bg"
                style={{ position: 'absolute', inset: 0 }}
            />
        </div>
    );
}
