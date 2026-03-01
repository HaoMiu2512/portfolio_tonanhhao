'use client';

import { useState, useEffect, useRef } from 'react';

const TYPING_TEXTS = [
    'Fullstack Developer',
    'AI / ML Engineer',
    'Security Researcher',
    'React & Next.js Expert',
    'Backend Architect',
    'Ethical Hacker',
];

/* Floating tech orbit tags */
const ORBIT_TAGS = [
    // Fullstack
    { label: 'React', color: '#61dafb', angle: 0, radius: 160, speed: 18 },
    { label: 'Next.js', color: '#a855f7', angle: 45, radius: 160, speed: 22 },
    { label: 'Node.js', color: '#39d353', angle: 90, radius: 160, speed: 20 },
    { label: 'TypeScript', color: '#3178c6', angle: 135, radius: 160, speed: 25 },
    // AI
    { label: 'PyTorch', color: '#ee4c2c', angle: 180, radius: 160, speed: 19 },
    { label: 'LangChain', color: '#00d4ff', angle: 225, radius: 160, speed: 23 },
    // Security
    { label: 'Pentesting', color: '#ffd700', angle: 270, radius: 160, speed: 21 },
    { label: 'Docker', color: '#2496ed', angle: 315, radius: 160, speed: 17 },
];

function FloatingOrbit({ centerX, centerY }: { centerX: number; centerY: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const startTime = useRef(Date.now());

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const W = canvas.width = canvas.offsetWidth;
        const H = canvas.height = canvas.offsetHeight;
        const cx = W / 2;
        const cy = H / 2;

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const elapsed = (Date.now() - startTime.current) / 1000;

            // Outer orbit ring
            ctx.beginPath();
            ctx.arc(cx, cy, 148, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(168,85,247,0.15)';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 8]);
            ctx.stroke();
            ctx.setLineDash([]);

            // Inner ring
            ctx.beginPath();
            ctx.arc(cx, cy, 100, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0,212,255,0.1)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw rotating tags
            ORBIT_TAGS.forEach((tag, i) => {
                const dir = i % 2 === 0 ? 1 : -1;
                const angle = ((tag.angle * Math.PI) / 180) + dir * elapsed * (Math.PI / tag.speed);
                const x = cx + tag.radius * Math.cos(angle);
                const y = cy + tag.radius * Math.sin(angle);

                // Dot
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = tag.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = tag.color;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Label
                ctx.font = "bold 11px 'Share Tech Mono', monospace";
                ctx.fillStyle = tag.color;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Background pill
                const textW = ctx.measureText(tag.label).width;
                const px = 6, py = 3;
                ctx.fillStyle = 'rgba(13,14,17,0.85)';
                ctx.beginPath();
                const lx = x - textW / 2 - px;
                const ly = y + 12 - py;
                const lw = textW + px * 2;
                const lh = 14 + py * 2;
                ctx.roundRect(lx, ly, lw, lh, 4);
                ctx.fill();
                ctx.strokeStyle = tag.color + '66';
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fillStyle = tag.color;
                ctx.fillText(tag.label, x, y + 12 + lh / 2 - py);
            });

            animRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '380px', height: '380px',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
}


export default function HeroSection() {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = TYPING_TEXTS[textIndex];
        let timeout: NodeJS.Timeout;
        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex((c) => c + 1), 75);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
        }
        setDisplayText(current.slice(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, textIndex]);

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    /* Domain pills */
    const domains = [
        { icon: '🌐', label: 'Fullstack', color: 'var(--kali-purple-bright)', bg: 'var(--kali-purple-glow)' },
        { icon: '🤖', label: 'AI / ML', color: 'var(--kali-cyan)', bg: 'var(--kali-cyan-glow)' },
        { icon: '🔒', label: 'Security', color: 'var(--kali-green)', bg: 'var(--kali-green-glow)' },
    ];

    return (
        <section
            id="home"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '70px' }}
        >

            <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 1.5rem', width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '3rem',
                    alignItems: 'center',
                }}>
                    {/* ── LEFT CONTENT ── */}
                    <div style={{ animation: 'slideInLeft 0.8s ease forwards' }}>

                        {/* Domain badge row */}
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {domains.map((d) => (
                                <span key={d.label} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    padding: '0.35rem 0.85rem',
                                    background: d.bg,
                                    border: `1px solid ${d.color}`,
                                    borderRadius: '20px',
                                    fontFamily: "'Share Tech Mono', monospace",
                                    fontSize: '0.78rem',
                                    color: d.color,
                                }}>
                                    {d.icon} {d.label}
                                </span>
                            ))}
                        </div>

                        {/* Terminal prompt */}
                        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.88rem', marginBottom: '0.4rem', opacity: 0.8 }}>
                            <span style={{ color: 'var(--kali-green)' }}>visitor@portfolio</span>
                            <span style={{ color: 'var(--text-muted)' }}>:</span>
                            <span style={{ color: 'var(--kali-cyan)' }}>~</span>
                            <span style={{ color: 'var(--text-muted)' }}>$ whoami</span>
                        </div>

                        {/* Name */}
                        <h1 className="font-orbitron" style={{
                            fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                            fontWeight: 900, lineHeight: 1.1,
                            marginBottom: '0.4rem',
                            color: 'var(--text-primary)',
                        }}>
                            Tôn Anh Hào
                        </h1>

                        {/* Typing text */}
                        <div style={{
                            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                            fontFamily: "'Share Tech Mono', monospace",
                            color: 'var(--kali-cyan)',
                            marginBottom: '1.5rem',
                            minHeight: '2.2rem',
                            display: 'flex', alignItems: 'center', gap: '4px',
                        }}>
                            <span style={{ color: 'var(--kali-purple-bright)' }}>&gt;&gt;</span>
                            &nbsp;{displayText}
                            <span className="cursor-blink" style={{ color: 'var(--kali-purple-bright)', fontSize: '1.4em', lineHeight: 1 }}>|</span>
                        </div>

                        {/* Description */}
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '580px', marginBottom: '2rem', lineHeight: 1.8 }}>
                            I build <strong style={{ color: 'var(--kali-purple-bright)' }}>full-stack web applications</strong>, craft
                            <strong style={{ color: 'var(--kali-cyan)' }}> AI-powered experiences</strong>, and secure systems through
                            <strong style={{ color: 'var(--kali-green)' }}> ethical hacking</strong> — turning complex problems into elegant solutions.
                        </p>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            {[
                                { val: '20+', label: 'Projects Shipped', color: 'var(--kali-purple-bright)' },
                                { val: '5+', label: 'AI Models Built', color: 'var(--kali-cyan)' },
                                { val: '3+', label: 'Years Coding', color: 'var(--kali-green)' },
                                { val: 'Top 5%', label: 'HackTheBox', color: 'var(--kali-orange)' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="font-orbitron" style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color }}>{s.val}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'Share Tech Mono', monospace" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button className="btn-primary" onClick={() => scrollTo('projects')}>
                                <span>🚀</span> View Projects
                            </button>
                            <button className="btn-outline" onClick={() => scrollTo('contact')}>
                                <span>💬</span> Get In Touch
                            </button>
                            <a href="/resume.pdf" className="btn-outline"
                                style={{ color: 'var(--kali-green)', borderColor: 'var(--kali-green)' }} download>
                                <span>⬇</span> Resume
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT: AVATAR + ORBIT ── */}
                    <div className="hero-avatar-wrapper" style={{ position: 'relative', width: '340px', height: '340px', animation: 'slideInRight 0.8s ease forwards' }}>
                        {/* Canvas orbit animation */}
                        <FloatingOrbit centerX={170} centerY={170} />

                        {/* Avatar */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '180px', height: '180px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '3px solid var(--kali-purple)',
                            boxShadow: '0 0 30px var(--kali-purple-glow), 0 0 60px rgba(100,52,167,0.2)',
                            animation: 'float 6s ease-in-out infinite',
                            zIndex: 2,
                        }}>
                            <img src="/avatar.png" alt="Tôn Anh Hào" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {/* Scanline */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                                pointerEvents: 'none',
                            }} />
                        </div>

                        {/* Center glow ring */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '200px', height: '200px',
                            borderRadius: '50%',
                            border: '1px solid var(--kali-purple)',
                            animation: 'glowPulse 3s infinite',
                            zIndex: 1,
                        }} />

                        {/* Status badge */}
                        <div style={{
                            position: 'absolute', bottom: '30px', right: '-10px',
                            padding: '0.4rem 0.7rem',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--kali-green)',
                            borderRadius: '6px',
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '0.7rem',
                            color: 'var(--kali-green)',
                            boxShadow: '0 0 10px var(--kali-green-glow)',
                            zIndex: 3,
                            whiteSpace: 'nowrap',
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--kali-green)', display: 'inline-block', marginRight: '5px', animation: 'glowPulse 2s infinite' }} />
                            OPEN TO WORK
                        </div>

                        {/* Stack badge */}
                        <div style={{
                            position: 'absolute', top: '30px', left: '-10px',
                            padding: '0.4rem 0.7rem',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--kali-cyan)',
                            borderRadius: '6px',
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '0.7rem',
                            color: 'var(--kali-cyan)',
                            boxShadow: '0 0 10px var(--kali-cyan-glow)',
                            zIndex: 3,
                            whiteSpace: 'nowrap',
                        }}>
                            🤖 AI + WEB + SEC
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', animation: 'fadeIn 2s 1.5s ease both' }}>
                    <span style={{ color: 'var(--text-muted)', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', marginBottom: '0.5rem', letterSpacing: '0.15em' }}>
                        SCROLL DOWN
                    </span>
                    <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--kali-purple-bright), transparent)' }} />
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .hero-avatar-wrapper { display: none !important; }
        }
      `}</style>
        </section>
    );
}
