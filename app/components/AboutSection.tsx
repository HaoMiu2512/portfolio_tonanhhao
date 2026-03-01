'use client';

export default function AboutSection() {
    const timeline = [
        { year: '2021', icon: '🎓', title: 'Started CS Degree', desc: 'Bachelor of Information Technology — Information Security', color: 'var(--kali-purple-bright)' },
        { year: '2022', icon: '💻', title: 'First Fullstack Project', desc: 'Built a real-time chat app with React + Node.js + WebSockets. Fell in love with building products.', color: 'var(--kali-cyan)' },
        { year: '2023', icon: '🤖', title: 'Dove into AI/ML', desc: 'Explored PyTorch, built NLP models, integrated OpenAI APIs. Started applying AI to real-world apps.', color: 'var(--kali-green)' },
        { year: '2024', icon: '🔒', title: 'Security Research', desc: 'Competed in CTF competitions, obtained CEH certification, discovered vulnerabilities in bug bounty programs.', color: 'var(--kali-orange)' },
        { year: '2025', icon: '🚀', title: 'Building at Scale', desc: 'Designing production-grade systems combining web, AI, and security-first principles.', color: 'var(--kali-purple-bright)' },
    ];

    const facts = [
        { icon: '🌐', label: 'Location', val: 'Ho Chi Minh City, Vietnam' },
        { icon: '💬', label: 'Languages', val: 'Vietnamese, English' },
        { icon: '🖥️', label: 'Stack', val: 'React, Next.js, Python, Node' },
        { icon: '🎮', label: 'Off-hours', val: 'CTF, OSS Contributing, Gaming' },
    ];

    return (
        <section id="about" className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>01 // ABOUT ME</div>
                    <h2 className="section-title gradient-text">Who Am I?</h2>
                    <p className="section-subtitle">A developer who codes, builds AI, and breaks things (ethically)</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Bio card */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div className="cyber-card">
                            <h3 style={{ color: 'var(--kali-purple-bright)', fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', marginBottom: '1rem' }}>
                                👋 Hey there!
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1rem' }}>
                                I&apos;m <strong style={{ color: 'var(--text-primary)' }}>Tôn Anh Hào</strong> — a passionate
                                <strong style={{ color: 'var(--kali-purple-bright)' }}> Fullstack Developer</strong> who specializes in
                                building end-to-end web applications with modern technologies. I combine deep
                                <strong style={{ color: 'var(--kali-cyan)' }}> AI/ML knowledge</strong> to create intelligent systems
                                and apply <strong style={{ color: 'var(--kali-green)' }}>cybersecurity expertise</strong> to build apps that are not just powerful but secure by design.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                                I believe the best engineers are those who can design the backend, polish the frontend,
                                train an AI model, and ensure the whole system is hardened against attacks.
                            </p>
                        </div>

                        <div className="cyber-card">
                            <h3 style={{ color: 'var(--kali-cyan)', fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem', marginBottom: '1rem' }}>
                                ⚡ Quick Facts
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                                {facts.map((f) => (
                                    <div key={f.label} style={{ padding: '0.6rem', background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                                        <div style={{ fontSize: '1.1rem' }}>{f.icon}</div>
                                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: "'Share Tech Mono', monospace" }}>{f.label}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, marginTop: '0.1rem' }}>{f.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What I do pills */}
                        <div className="cyber-card">
                            <h3 style={{ color: 'var(--kali-green)', fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem', marginBottom: '1rem' }}>
                                🎯 What I Do
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {[
                                    { label: 'Build full-stack web apps from scratch to production', color: 'var(--kali-purple-bright)', icon: '🌐' },
                                    { label: 'Integrate AI/LLM into real products (RAG, agents, fine-tuning)', color: 'var(--kali-cyan)', icon: '🤖' },
                                    { label: 'Perform web penetration testing & security audits', color: 'var(--kali-green)', icon: '🔒' },
                                    { label: 'Design scalable APIs and microservice architectures', color: 'var(--kali-orange)', icon: '⚙️' },
                                ].map((item) => (
                                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>{item.icon}</span>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="cyber-card" style={{ padding: '1.5rem' }}>
                        <h3 className="font-orbitron" style={{ fontSize: '0.9rem', color: 'var(--kali-purple-bright)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
                            📍 MY JOURNEY
                        </h3>
                        <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                            {/* Vertical line */}
                            <div style={{
                                position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px',
                                background: 'linear-gradient(to bottom, var(--kali-purple-bright), var(--kali-cyan), var(--kali-green))',
                                opacity: 0.4,
                            }} />

                            {timeline.map((item, i) => (
                                <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? '1.75rem' : 0 }}>
                                    {/* Dot */}
                                    <div style={{
                                        position: 'absolute', left: '-1.5rem',
                                        width: '14px', height: '14px',
                                        borderRadius: '50%',
                                        border: `2px solid ${item.color}`,
                                        background: 'var(--bg-card)',
                                        top: '4px',
                                        boxShadow: `0 0 8px ${item.color}55`,
                                    }} />

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                        <span className="font-mono" style={{ fontSize: '0.72rem', color: item.color, fontWeight: 700 }}>{item.year}</span>
                                        <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                                        <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{item.title}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
