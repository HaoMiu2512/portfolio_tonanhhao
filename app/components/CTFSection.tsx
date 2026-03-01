'use client';

const ctfWriteups = [
    {
        id: 1,
        event: 'PicoCTF 2024',
        challenge: 'WebExploit-500',
        category: 'Web',
        difficulty: 'Hard',
        points: 500,
        solved: true,
        description: 'SQL injection qua blind time-based attack, bypass WAF bằng encoding techniques.',
        tags: ['SQLi', 'WAF Bypass', 'Blind SQLi'],
    },
    {
        id: 2,
        event: 'HackTheBox',
        challenge: 'Machine: Cascade',
        category: 'Active Directory',
        difficulty: 'Medium',
        points: null,
        solved: true,
        description: 'LDAP enumeration → decode base64 password → WinRM access → AD Recycle Bin abuse.',
        tags: ['AD', 'LDAP', 'Windows'],
    },
    {
        id: 3,
        event: 'CTFtime 2024',
        challenge: 'Crypto Madness',
        category: 'Crypto',
        difficulty: 'Hard',
        points: 400,
        solved: true,
        description: 'RSA với small e và partial key exposure attack sử dụng Coppersmith\'s theorem.',
        tags: ['RSA', 'Coppersmith', 'Math'],
    },
    {
        id: 4,
        event: 'ViettelCyberSec',
        challenge: 'Binary Nightmare',
        category: 'Pwn',
        difficulty: 'Expert',
        points: 600,
        solved: true,
        description: 'Heap exploitation với tcache poisoning, bypass ASLR/PIE via format string leak.',
        tags: ['Heap', 'tcache', 'Format String'],
    },
];

const platforms = [
    { name: 'HackTheBox', rank: 'Pro Hacker', score: 8420, machines: 45, icon: '🟢', color: 'var(--kali-green)', url: 'https://hackthebox.com' },
    { name: 'TryHackMe', rank: 'Top 5%', score: 15200, machines: 120, icon: '🔴', color: 'var(--kali-red)', url: 'https://tryhackme.com' },
    { name: 'CTFtime.org', rank: 'Verified Player', score: 3800, machines: 50, icon: '⚡', color: 'var(--kali-yellow)', url: 'https://ctftime.org' },
    { name: 'PicoCTF', rank: 'Top 100', score: 5600, machines: 80, icon: '🎯', color: 'var(--kali-cyan)', url: 'https://picoctf.org' },
];

const diffColor = (d: string) => {
    if (d === 'Easy') return 'badge-green';
    if (d === 'Medium') return 'badge-cyan';
    if (d === 'Hard') return 'badge-purple';
    if (d === 'Expert') return 'badge-red';
    return 'badge-purple';
};

const catColor = (cat: string) => {
    const map: Record<string, string> = {
        Web: 'var(--kali-cyan)',
        Crypto: 'var(--kali-yellow)',
        Pwn: 'var(--kali-red)',
        'Active Directory': 'var(--kali-orange)',
        Forensics: 'var(--kali-green)',
        Reverse: 'var(--kali-purple-bright)',
    };
    return map[cat] || 'var(--kali-purple-bright)';
};

export default function CTFSection() {
    return (
        <section id="ctf" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>04 // CTF &amp; LABS</div>
                    <h2 className="section-title gradient-text">CTF &amp; Training Labs</h2>
                    <p className="section-subtitle">Track record trên các nền tảng và cuộc thi an ninh mạng</p>
                </div>

                {/* Platform cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem',
                    marginBottom: '3rem',
                }}>
                    {platforms.map((p) => (
                        <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-card"
                            style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '1.8rem' }}>{p.icon}</span>
                                <div>
                                    <div className="font-orbitron" style={{ fontSize: '0.85rem', color: p.color, fontWeight: 700 }}>{p.name}</div>
                                    <div className="badge badge-purple" style={{ marginTop: '0.2rem' }}>{p.rank}</div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                <div style={{ padding: '0.5rem', background: 'var(--bg-secondary)', borderRadius: '4px', textAlign: 'center' }}>
                                    <div className="font-orbitron" style={{ fontSize: '1rem', color: p.color, fontWeight: 700 }}>{p.score.toLocaleString()}</div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: "'Share Tech Mono', monospace" }}>POINTS</div>
                                </div>
                                <div style={{ padding: '0.5rem', background: 'var(--bg-secondary)', borderRadius: '4px', textAlign: 'center' }}>
                                    <div className="font-orbitron" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{p.machines}</div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: "'Share Tech Mono', monospace" }}>PWNED</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTF Writeups */}
                <div>
                    <h3 className="font-orbitron" style={{ fontSize: '1rem', color: 'var(--kali-purple-bright)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
                        📝 FEATURED WRITE-UPS
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {ctfWriteups.map((w) => (
                            <div key={w.id} className="cyber-card" style={{ padding: '1.25rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                            <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[{w.event}]</span>
                                            <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>{w.challenge}</h4>
                                            <span style={{
                                                padding: '0.15rem 0.5rem',
                                                borderRadius: '3px',
                                                fontSize: '0.65rem',
                                                fontFamily: "'Share Tech Mono', monospace",
                                                color: catColor(w.category),
                                                border: `1px solid ${catColor(w.category)}44`,
                                                background: `${catColor(w.category)}11`,
                                            }}>
                                                {w.category}
                                            </span>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                                            {w.description}
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                            {w.tags.map((tag) => (
                                                <span key={tag} className="skill-tag" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                                        <span className={`badge ${diffColor(w.difficulty)}`}>{w.difficulty}</span>
                                        {w.points && (
                                            <span className="font-orbitron" style={{ fontSize: '0.9rem', color: 'var(--kali-yellow)', fontWeight: 700 }}>
                                                {w.points}pts
                                            </span>
                                        )}
                                        {w.solved && (
                                            <span style={{ fontSize: '0.75rem', color: 'var(--kali-green)', fontFamily: "'Share Tech Mono', monospace" }}>
                                                ✓ SOLVED
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
