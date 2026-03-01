'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|\\/*&^%$#@!~';
        const fontSize = 13;
        const cols = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(cols).fill(1);

        const checkTheme = () => {
            return document.documentElement.getAttribute('data-theme') === 'light';
        };

        const draw = () => {
            const isLight = checkTheme();
            ctx.fillStyle = isLight ? 'rgba(240,240,245,0.04)' : 'rgba(13,14,17,0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const brightness = Math.random();

                if (brightness > 0.95) {
                    ctx.fillStyle = '#ffffff';
                } else if (brightness > 0.7) {
                    ctx.fillStyle = isLight ? '#7c3aed' : '#a855f7';
                } else {
                    ctx.fillStyle = isLight ? '#0284c7' : '#3b82f6';
                }

                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 45);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.18,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
