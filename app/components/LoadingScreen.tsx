"use client";

import { useEffect, useState, useRef } from "react";

const BOOT_LINES = [
    { text: "Initializing KALI-PORTFOLIO v2.0...", delay: 0, color: "#39d353" },
    { text: "Loading kernel modules...", delay: 200, color: "#39d353" },
    { text: "[  OK  ] Loaded exploit-db.service", delay: 400, color: "#39d353" },
    { text: "[  OK  ] Loaded nmap-scanner.service", delay: 600, color: "#39d353" },
    { text: "[  OK  ] Started security-audit.service", delay: 800, color: "#39d353" },
    { text: "Mounting encrypted filesystem...", delay: 1000, color: "#00d4ff" },
    { text: "[  OK  ] Filesystem decrypted successfully", delay: 1200, color: "#39d353" },
    { text: "Loading AI/ML frameworks...", delay: 1400, color: "#00d4ff" },
    { text: "[  OK  ] TensorFlow engine initialized", delay: 1600, color: "#39d353" },
    { text: "[  OK  ] LangChain agent ready", delay: 1800, color: "#39d353" },
    { text: "Establishing secure connection...", delay: 2000, color: "#00d4ff" },
    { text: "[  OK  ] SSL/TLS handshake complete", delay: 2200, color: "#39d353" },
    { text: "Booting portfolio interface...", delay: 2400, color: "#a855f7" },
    { text: "System ready. Welcome, User.", delay: 2700, color: "#a855f7" },
];

const MATRIX_CHARS =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";

export default function LoadingScreen({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const [visibleLines, setVisibleLines] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState<"booting" | "done">("booting");
    const [glitchText, setGlitchText] = useState("TON ANH HAO");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number | null>(null);
    const glitchRef = useRef<NodeJS.Timeout | null>(null);

    /* ── Matrix rain ── */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = (canvas.width = window.innerWidth);
        const H = (canvas.height = window.innerHeight);
        const fontSize = 14;
        const cols = Math.floor(W / fontSize);
        const drops = Array(cols).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(13,14,17,0.05)";
            ctx.fillRect(0, 0, W, H);

            drops.forEach((y, i) => {
                const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

                // lead char is brighter
                ctx.fillStyle = i % 3 === 0 ? "#a855f7" : "#6434a7";
                ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
                ctx.fillText(char, i * fontSize, y * fontSize);

                if (y * fontSize > H && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });

            animFrameRef.current = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    /* ── Boot lines ── */
    useEffect(() => {
        BOOT_LINES.forEach((_, i) => {
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, i]);
            }, BOOT_LINES[i].delay);
        });
    }, []);

    /* ── Progress bar ── */
    useEffect(() => {
        const totalDuration = 3200;
        const start = performance.now();
        const tick = (now: number) => {
            const elapsed = now - start;
            const pct = Math.min((elapsed / totalDuration) * 100, 100);
            setProgress(Math.floor(pct));
            if (pct < 100) {
                requestAnimationFrame(tick);
            } else {
                setPhase("done");
                setTimeout(onComplete, 500);
            }
        };
        requestAnimationFrame(tick);
    }, [onComplete]);

    /* ── Glitch effect ── */
    useEffect(() => {
        const ORIGINAL = "TON ANH HAO";
        const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        let count = 0;

        const glitch = () => {
            count++;
            if (count % 8 === 0) {
                // occasionally show scrambled
                const scrambled = ORIGINAL.split("")
                    .map((c) =>
                        c === " "
                            ? " "
                            : Math.random() > 0.6
                                ? CHARS[Math.floor(Math.random() * CHARS.length)]
                                : c
                    )
                    .join("");
                setGlitchText(scrambled);
                setTimeout(() => setGlitchText(ORIGINAL), 80);
            }
        };

        glitchRef.current = setInterval(glitch, 120);
        return () => {
            if (glitchRef.current) clearInterval(glitchRef.current);
        };
    }, []);

    return (
        <div
            className="loading-screen"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "#0d0e11",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                opacity: phase === "done" ? 0 : 1,
                transition: "opacity 0.5s ease",
                pointerEvents: phase === "done" ? "none" : "all",
            }}
        >
            {/* Matrix canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.35,
                }}
            />

            {/* Scanline overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            {/* Sweep scan line */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                        "linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(0,212,255,0.8), transparent)",
                    animation: "scanMove 3s linear infinite",
                    zIndex: 2,
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 3,
                    width: "min(720px, 92vw)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                    {/* Dragon icon SVG – Kali logo feel */}
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        style={{
                            margin: "0 auto 0.75rem",
                            filter: "drop-shadow(0 0 12px #a855f7)",
                            display: "block",
                        }}
                    >
                        <polygon
                            points="32,4 58,52 32,42 6,52"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="2"
                        />
                        <polygon
                            points="32,4 44,34 32,28 20,34"
                            fill="rgba(168,85,247,0.3)"
                            stroke="#00d4ff"
                            strokeWidth="1"
                        />
                        <circle cx="32" cy="32" r="4" fill="#a855f7" />
                    </svg>

                    <h1
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                            fontWeight: 900,
                            letterSpacing: "0.18em",
                            background:
                                "linear-gradient(135deg, #a855f7 0%, #00d4ff 60%, #a855f7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textShadow: "none",
                            filter: "drop-shadow(0 0 8px rgba(168,85,247,0.7))",
                            animation: "glowPulseText 2s ease-in-out infinite",
                        }}
                    >
                        {glitchText}
                    </h1>

                    <p
                        style={{
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: "0.78rem",
                            color: "#00d4ff",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            marginTop: "0.35rem",
                            opacity: 0.8,
                        }}
                    >
                        ◈ &nbsp;FULLSTACK · AI · SECURITY&nbsp; ◈
                    </p>
                </div>

                {/* Terminal box */}
                <div
                    style={{
                        background: "rgba(5,5,7,0.85)",
                        border: "1px solid #2d2e3d",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow:
                            "0 0 30px rgba(100,52,167,0.4), inset 0 0 20px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Terminal header */}
                    <div
                        style={{
                            background: "#0d0e11",
                            padding: "0.55rem 1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            borderBottom: "1px solid #2d2e3d",
                        }}
                    >
                        <span
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: "#ff4c4c",
                                display: "inline-block",
                            }}
                        />
                        <span
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: "#ffd700",
                                display: "inline-block",
                            }}
                        />
                        <span
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: "#39d353",
                                display: "inline-block",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Share Tech Mono', monospace",
                                fontSize: "0.72rem",
                                color: "#64748b",
                                marginLeft: "0.5rem",
                            }}
                        >
                            root@kali-portfolio:~#
                        </span>
                    </div>

                    {/* Terminal body */}
                    <div
                        style={{
                            padding: "1rem 1.25rem",
                            minHeight: "200px",
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: "0.8rem",
                            lineHeight: 1.75,
                            maxHeight: "240px",
                            overflowY: "hidden",
                        }}
                    >
                        {BOOT_LINES.map((line, i) =>
                            visibleLines.includes(i) ? (
                                <div
                                    key={i}
                                    style={{
                                        color: line.color,
                                        animation: "fadeInLine 0.2s ease",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                    }}
                                >
                                    <span style={{ color: "#6434a7", marginRight: "0.4rem" }}>$</span>
                                    {line.text}
                                </div>
                            ) : null
                        )}
                        {/* blinking cursor */}
                        <span
                            style={{
                                display: "inline-block",
                                width: "8px",
                                height: "14px",
                                background: "#39d353",
                                verticalAlign: "text-bottom",
                                animation: "blink 1s step-end infinite",
                                marginTop: "2px",
                            }}
                        />
                    </div>
                </div>

                {/* Progress bar */}
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#64748b",
                            marginBottom: "0.4rem",
                        }}
                    >
                        <span style={{ color: "#a855f7" }}>SYSTEM BOOT</span>
                        <span style={{ color: "#00d4ff" }}>{progress}%</span>
                    </div>

                    {/* track */}
                    <div
                        style={{
                            width: "100%",
                            height: "6px",
                            background: "#13141a",
                            borderRadius: "3px",
                            border: "1px solid #2d2e3d",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        {/* fill */}
                        <div
                            style={{
                                height: "100%",
                                width: `${progress}%`,
                                background:
                                    "linear-gradient(90deg, #6434a7, #a855f7, #00d4ff)",
                                borderRadius: "3px",
                                transition: "width 0.05s linear",
                                boxShadow: "0 0 12px rgba(168,85,247,0.8)",
                                position: "relative",
                            }}
                        >
                            {/* shimmer */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: "30px",
                                    height: "100%",
                                    background:
                                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.5))",
                                    animation: "shimmer 0.8s ease infinite",
                                }}
                            />
                        </div>
                    </div>

                    {/* segment ticks */}
                    <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: 1,
                                    height: "3px",
                                    background: progress >= (i + 1) * 5 ? "#a855f7" : "#2d2e3d",
                                    borderRadius: "1px",
                                    transition: "background 0.1s ease",
                                    boxShadow:
                                        progress >= (i + 1) * 5
                                            ? "0 0 4px rgba(168,85,247,0.6)"
                                            : "none",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Status chips */}
                <div
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {[
                        { label: "KERNEL", ok: progress > 20 },
                        { label: "NETWORK", ok: progress > 40 },
                        { label: "AI ENGINE", ok: progress > 60 },
                        { label: "SECURITY", ok: progress > 80 },
                        { label: "UI READY", ok: progress >= 100 },
                    ].map(({ label, ok }) => (
                        <div
                            key={label}
                            style={{
                                fontFamily: "'Share Tech Mono', monospace",
                                fontSize: "0.65rem",
                                letterSpacing: "0.1em",
                                padding: "0.2rem 0.6rem",
                                borderRadius: "3px",
                                border: `1px solid ${ok ? "#39d353" : "#2d2e3d"}`,
                                color: ok ? "#39d353" : "#64748b",
                                background: ok ? "rgba(57,211,83,0.08)" : "transparent",
                                transition: "all 0.3s ease",
                                boxShadow: ok ? "0 0 6px rgba(57,211,83,0.3)" : "none",
                            }}
                        >
                            {ok ? "✓" : "○"} {label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Corner decorations */}
            <CornerDecor position="top-left" />
            <CornerDecor position="top-right" />
            <CornerDecor position="bottom-left" />
            <CornerDecor position="bottom-right" />

            <style>{`
        @keyframes scanMove {
          0%   { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes fadeInLine {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes glowPulseText {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(168,85,247,0.6)); }
          50%       { filter: drop-shadow(0 0 16px rgba(168,85,247,0.9)) drop-shadow(0 0 30px rgba(0,212,255,0.4)); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.3; }
          50%  { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
        </div>
    );
}

/* ── Corner decorator ── */
function CornerDecor({ position }: { position: string }) {
    const isTop = position.includes("top");
    const isLeft = position.includes("left");
    const size = 28;

    return (
        <div
            style={{
                position: "absolute",
                top: isTop ? 16 : undefined,
                bottom: !isTop ? 16 : undefined,
                left: isLeft ? 16 : undefined,
                right: !isLeft ? 16 : undefined,
                width: size,
                height: size,
                borderTop: isTop ? "2px solid #6434a7" : "none",
                borderBottom: !isTop ? "2px solid #6434a7" : "none",
                borderLeft: isLeft ? "2px solid #6434a7" : "none",
                borderRight: !isLeft ? "2px solid #6434a7" : "none",
                opacity: 0.7,
                zIndex: 4,
            }}
        />
    );
}
