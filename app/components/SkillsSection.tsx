'use client';

import { useEffect, useRef, useState } from 'react';

const skillTabs = [
    {
        id: 'fullstack',
        label: 'Fullstack',
        icon: '🌐',
        color: 'var(--kali-purple-bright)',
        skills: [
            { name: 'React / Next.js', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Node.js / Express', level: 88 },
            { name: 'PostgreSQL / MongoDB', level: 82 },
            { name: 'REST APIs / GraphQL', level: 85 },
            { name: 'Docker / CI-CD', level: 78 },
            { name: 'Tailwind CSS / Styled Components', level: 88 },
            { name: 'Redis / Caching', level: 74 },
        ],
    },
    {
        id: 'ai',
        label: 'AI / ML',
        icon: '🤖',
        color: 'var(--kali-cyan)',
        skills: [
            { name: 'Python (NumPy, Pandas)', level: 90 },
            { name: 'PyTorch / TensorFlow', level: 80 },
            { name: 'OpenAI / LLM APIs', level: 88 },
            { name: 'LangChain / LlamaIndex', level: 82 },
            { name: 'RAG Pipelines', level: 80 },
            { name: 'Scikit-learn / XGBoost', level: 76 },
            { name: 'HuggingFace Transformers', level: 78 },
            { name: 'Vector DBs (Pinecone, Weaviate)', level: 72 },
        ],
    },
    {
        id: 'security',
        label: 'Security',
        icon: '🔒',
        color: 'var(--kali-green)',
        skills: [
            { name: 'Web Application Pentesting', level: 84 },
            { name: 'Burp Suite Pro', level: 88 },
            { name: 'OWASP Top 10', level: 90 },
            { name: 'Network Security / Nmap', level: 80 },
            { name: 'Secure Coding Practices', level: 85 },
            { name: 'Malware Analysis', level: 70 },
            { name: 'CTF (Crypto, Pwn, Forensics)', level: 78 },
            { name: 'Threat Modeling', level: 74 },
        ],
    },
];

const techGrid = [
    { cat: 'Frontend', color: 'var(--kali-purple-bright)', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand'] },
    { cat: 'Backend', color: 'var(--kali-cyan)', tags: ['Node.js', 'Express', 'FastAPI', 'Django', 'Prisma', 'GraphQL'] },
    { cat: 'AI / Data', color: 'var(--kali-orange)', tags: ['PyTorch', 'LangChain', 'OpenAI', 'HuggingFace', 'Pinecone', 'Pandas'] },
    { cat: 'Infra', color: 'var(--kali-green)', tags: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'Nginx', 'Redis'] },
    { cat: 'Security', color: 'var(--kali-red)', tags: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'SQLMap', 'Kali Linux'] },
    { cat: 'Database', color: 'var(--kali-yellow)', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Supabase', 'Firebase'] },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.3 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ marginBottom: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
                <span className="font-mono" style={{ fontSize: '0.78rem', color }}>{animated ? `${level}%` : '—'}</span>
            </div>
            <div style={{ height: '5px', background: 'var(--bg-secondary)', borderRadius: '3px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <div style={{
                    height: '100%',
                    width: animated ? `${level}%` : '0%',
                    background: `linear-gradient(90deg, ${color}, ${color}99)`,
                    borderRadius: '3px',
                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `0 0 6px ${color}55`,
                }} />
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState('fullstack');
    const active = skillTabs.find((t) => t.id === activeTab)!;

    return (
        <section id="skills" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>02 // SKILLS</div>
                    <h2 className="section-title gradient-text">Tech Stack &amp; Skills</h2>
                    <p className="section-subtitle">Across Fullstack, AI/ML, and Cybersecurity domains</p>
                </div>

                {/* Tab switcher */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {skillTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.6rem 1.5rem',
                                borderRadius: '6px',
                                border: '1px solid',
                                borderColor: activeTab === tab.id ? tab.color : 'var(--border-color)',
                                background: activeTab === tab.id ? `${tab.color}18` : 'transparent',
                                color: activeTab === tab.id ? tab.color : 'var(--text-muted)',
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                letterSpacing: '0.05em',
                                boxShadow: activeTab === tab.id ? `0 0 12px ${tab.color}33` : 'none',
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {/* Skill bars */}
                    <div className="cyber-card" style={{ gridColumn: 'span 1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                            <span style={{ fontSize: '1.4rem' }}>{active.icon}</span>
                            <h3 className="font-orbitron" style={{ fontSize: '0.85rem', color: active.color, letterSpacing: '0.08em' }}>
                                {active.label.toUpperCase()} PROFICIENCY
                            </h3>
                        </div>
                        {active.skills.map((s) => (
                            <SkillBar key={s.name} name={s.name} level={s.level} color={active.color} />
                        ))}
                    </div>

                    {/* Radar/overview card */}
                    <div className="cyber-card">
                        <h3 className="font-orbitron" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                            📊 DOMAIN OVERVIEW
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                            {skillTabs.map((tab) => {
                                const avg = Math.round(tab.skills.reduce((a, s) => a + s.level, 0) / tab.skills.length);
                                return (
                                    <div key={tab.id}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                                                {tab.icon}
                                                <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{tab.label}</span>
                                            </span>
                                            <span className="font-mono" style={{ color: tab.color, fontSize: '0.85rem' }}>{avg}%</span>
                                        </div>
                                        <div style={{ height: '8px', background: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                                            <div style={{
                                                height: '100%', width: `${avg}%`,
                                                background: `linear-gradient(90deg, ${tab.color}, ${tab.color}88)`,
                                                borderRadius: '4px',
                                                boxShadow: `0 0 8px ${tab.color}44`,
                                                transition: 'width 1s ease',
                                            }} />
                                        </div>
                                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontFamily: "'Share Tech Mono', monospace" }}>
                                            {tab.skills.length} skill areas
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Terminal note */}
                        <div style={{ marginTop: '1.5rem', padding: '0.75rem', background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                            <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--kali-green)' }}>
                                $ echo &quot;Always learning, always shipping 🚀&quot;
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tech Grid */}
                <div>
                    <h3 className="font-orbitron" style={{ fontSize: '0.85rem', color: 'var(--kali-purple-bright)', marginBottom: '1.5rem', letterSpacing: '0.1em', textAlign: 'center' }}>
                        🛠️ TOOLS &amp; TECHNOLOGIES
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                        {techGrid.map((group) => (
                            <div key={group.cat} className="cyber-card" style={{ padding: '1rem' }}>
                                <div className="font-orbitron" style={{ fontSize: '0.72rem', color: group.color, marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
                                    {group.cat.toUpperCase()}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                    {group.tags.map((tag) => (
                                        <span key={tag} className="skill-tag" style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}>
                                            <span style={{ color: group.color, fontSize: '0.65rem' }}>▸</span> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
