'use client';

import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'AI-Powered SaaS Platform',
        category: 'Fullstack + AI',
        tags: ['Next.js', 'OpenAI', 'PostgreSQL'],
        color: 'var(--kali-purple-bright)',
        icon: '🤖',
        description:
            'A multi-tenant SaaS platform with AI-driven features: smart content generation, RAG-powered Q&A, user analytics. Built with Next.js App Router, Stripe billing, and OpenAI GPT-4.',
        tech: ['Next.js 14', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Stripe'],
        github: 'https://github.com',
        demo: 'https://demo.example.com',
        status: 'Production',
        stars: 210,
        domain: 'ai',
    },
    {
        id: 2,
        title: 'RAG Document Q&A Engine',
        category: 'AI / ML',
        tags: ['LangChain', 'Pinecone', 'FastAPI'],
        color: 'var(--kali-cyan)',
        icon: '📚',
        description:
            'End-to-end Retrieval-Augmented Generation system. Upload any PDF/docs, ask questions, get accurate answers with source citations. Built with LangChain + Pinecone vector DB + FastAPI backend.',
        tech: ['Python', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'OpenAI'],
        github: 'https://github.com',
        demo: 'https://demo.example.com',
        status: 'Active',
        stars: 182,
        domain: 'ai',
    },
    {
        id: 3,
        title: 'E-Commerce Fullstack App',
        category: 'Fullstack',
        tags: ['React', 'Node.js', 'MongoDB'],
        color: 'var(--kali-green)',
        icon: '🛒',
        description:
            'Full-featured e-commerce platform with product management, shopping cart, Stripe payments, admin dashboard, real-time inventory updates via WebSockets.',
        tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'Socket.io'],
        github: 'https://github.com',
        demo: 'https://demo.example.com',
        status: 'Production',
        stars: 156,
        domain: 'fullstack',
    },
    {
        id: 4,
        title: 'SecureScan Web Auditor',
        category: 'Security Tool',
        tags: ['Python', 'OWASP', 'FastAPI'],
        color: 'var(--kali-red)',
        icon: '🔍',
        description:
            'Automated web security scanner detecting OWASP Top 10 vulnerabilities: SQLi, XSS, SSRF, broken auth. Generates PDF reports with severity ratings and remediation steps.',
        tech: ['Python', 'FastAPI', 'Playwright', 'SQLMap', 'Docker'],
        github: 'https://github.com',
        demo: null,
        status: 'Active',
        stars: 134,
        domain: 'security',
    },
    {
        id: 5,
        title: 'Real-Time Analytics Dashboard',
        category: 'Fullstack',
        tags: ['Next.js', 'WebSockets', 'Grafana'],
        color: 'var(--kali-orange)',
        icon: '📊',
        description:
            'Live analytics dashboard processing 10K+ events/second. Features real-time charts, user funnel analysis, a/b test results, and alerting — built with React + ClickHouse + WebSockets.',
        tech: ['Next.js', 'ClickHouse', 'WebSockets', 'Recharts', 'Node.js', 'Redis'],
        github: 'https://github.com',
        demo: 'https://demo.example.com',
        status: 'Active',
        stars: 98,
        domain: 'fullstack',
    },
    {
        id: 6,
        title: 'AI Code Review Bot',
        category: 'AI + Fullstack',
        tags: ['LLM', 'GitHub API', 'Node.js'],
        color: 'var(--kali-yellow)',
        icon: '🤖',
        description:
            'GitHub bot that auto-reviews PRs using GPT-4, detects code smells, security issues, and leaves inline comments. Integrated with GitHub Actions for CI/CD pipelines.',
        tech: ['Node.js', 'OpenAI GPT-4', 'GitHub API', 'TypeScript', 'Docker'],
        github: 'https://github.com',
        demo: null,
        status: 'Active',
        stars: 267,
        domain: 'ai',
    },
];

const filters = ['All', 'Fullstack', 'AI', 'Security'];

const domainFilter: Record<string, string> = {
    All: '',
    Fullstack: 'fullstack',
    AI: 'ai',
    Security: 'security',
};

const statusBadge = (s: string) => {
    if (s === 'Production') return 'badge-green';
    if (s === 'Active') return 'badge-cyan';
    return 'badge-purple';
};

export default function ProjectsSection() {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All'
        ? projects
        : projects.filter((p) => p.domain === domainFilter[filter]);

    return (
        <section id="projects" className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>03 // PROJECTS</div>
                    <h2 className="section-title gradient-text">Featured Work</h2>
                    <p className="section-subtitle">Real-world projects across Fullstack, AI, and Security</p>
                </div>

                {/* Filters */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: '0.5rem 1.4rem',
                                borderRadius: '6px',
                                border: '1px solid',
                                borderColor: filter === f ? 'var(--kali-purple-bright)' : 'var(--border-color)',
                                background: filter === f ? 'var(--kali-purple-glow)' : 'transparent',
                                color: filter === f ? 'var(--kali-purple-bright)' : 'var(--text-muted)',
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {f === 'All' ? '⚡ All' : f === 'Fullstack' ? '🌐 Fullstack' : f === 'AI' ? '🤖 AI / ML' : '🔒 Security'}
                        </button>
                    ))}
                </div>

                {/* Projects grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.5rem' }}>
                    {filtered.map((p) => (
                        <div key={p.id} className="cyber-card" style={{ position: 'relative' }}>
                            {/* Color stripe */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                background: `linear-gradient(90deg, ${p.color}, transparent)`,
                                borderRadius: '8px 8px 0 0',
                            }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', marginTop: '0.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                    <span style={{
                                        fontSize: '1.6rem',
                                        width: '44px', height: '44px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: `${p.color}15`,
                                        border: `1px solid ${p.color}44`,
                                        borderRadius: '10px',
                                    }}>{p.icon}</span>
                                    <div>
                                        <h3 className="font-orbitron" style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 700 }}>{p.title}</h3>
                                        <span style={{ fontSize: '0.7rem', color: p.color, fontFamily: "'Share Tech Mono', monospace" }}>{p.category}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                                    <span className={`badge ${statusBadge(p.status)}`}>{p.status}</span>
                                    <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>⭐ {p.stars}</span>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p.description}</p>

                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                                {p.tags.map((t) => (
                                    <span key={t} className="badge" style={{
                                        background: `${p.color}12`,
                                        color: p.color,
                                        border: `1px solid ${p.color}33`,
                                        fontSize: '0.65rem',
                                    }}>{t}</span>
                                ))}
                            </div>

                            {/* Tech stack */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.1rem' }}>
                                {p.tech.map((t) => (
                                    <span key={t} className="skill-tag" style={{ fontSize: '0.7rem', padding: '0.18rem 0.5rem' }}>{t}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{ display: 'flex', gap: '0.65rem' }}>
                                {p.github && (
                                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                                            padding: '0.4rem 0.85rem',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '5px',
                                            color: 'var(--text-secondary)',
                                            textDecoration: 'none',
                                            fontSize: '0.78rem',
                                            fontFamily: "'Share Tech Mono', monospace",
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = p.color;
                                            (e.currentTarget as HTMLAnchorElement).style.color = p.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                                        }}
                                    >
                                        {'</>'}  Code
                                    </a>
                                )}
                                {p.demo && (
                                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary"
                                        style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem', textDecoration: 'none' }}>
                                        🚀 Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ display: 'inline-flex', textDecoration: 'none' }}
                    >
                        <span>🐙</span> See All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
