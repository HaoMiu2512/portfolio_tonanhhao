'use client';

export default function Footer() {
    const year = new Date().getFullYear();

    const links = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            padding: '2.5rem 1.5rem 1.5rem',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem',
                }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{
                                width: '30px', height: '30px',
                                background: 'linear-gradient(135deg, var(--kali-purple), var(--kali-cyan))',
                                borderRadius: '7px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.9rem',
                            }}>⚡</span>
                            <span className="font-orbitron" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                                <span style={{ color: 'var(--kali-purple-bright)' }}>HAO</span>
                                <span style={{ color: 'var(--kali-cyan)' }}>.DEV</span>
                            </span>
                        </div>
                        <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            Fullstack · AI · Security
                        </div>
                    </div>

                    {/* Nav links */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {links.map((l) => (
                            <button key={l.id} onClick={() => scrollTo(l.id)}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    color: 'var(--text-muted)', fontSize: '0.85rem',
                                    fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
                                    letterSpacing: '0.05em', textTransform: 'uppercase',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--kali-purple-bright)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'; }}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>

                    {/* Status */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kali-green)', animation: 'glowPulse 2s infinite' }} />
                        <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--kali-green)' }}>Open to Work</span>
                    </div>
                </div>

                <div className="cyber-divider" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--kali-green)' }}>visitor@portfolio</span>
                        <span style={{ color: 'var(--text-muted)' }}>:~$ echo &quot;Built with React, TypeScript &amp; ☕&quot;</span>
                    </div>
                    <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        © {year} Tôn Anh Hào — All rights reserved
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>
        </footer>
    );
}
