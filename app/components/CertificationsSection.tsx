'use client';

const certifications = [
    {
        id: 1,
        name: 'Certified Ethical Hacker',
        short: 'CEH',
        issuer: 'EC-Council',
        year: '2024',
        status: 'Active',
        icon: '🎖️',
        color: 'var(--kali-purple-bright)',
        credId: 'CEH-2024-XXXXX',
        domains: ['Network Security', 'Web App Hacking', 'Social Engineering'],
    },
    {
        id: 2,
        name: 'CompTIA Security+',
        short: 'SY0-701',
        issuer: 'CompTIA',
        year: '2023',
        status: 'Active',
        icon: '🛡️',
        color: 'var(--kali-cyan)',
        credId: 'COMP-SEC-XXXXX',
        domains: ['Threats & Vulnerabilities', 'Architecture', 'Incident Response'],
    },
    {
        id: 3,
        name: 'eLearnSecurity Web App Pentester',
        short: 'eWPT',
        issuer: 'eLearnSecurity',
        year: '2024',
        status: 'Active',
        icon: '🌐',
        color: 'var(--kali-green)',
        credId: 'eWPT-2024-XXXXX',
        domains: ['OWASP Top 10', 'Burp Suite', 'Manual Testing'],
    },
    {
        id: 4,
        name: 'Certified Network Defender',
        short: 'CND',
        issuer: 'EC-Council',
        year: '2023',
        status: 'Active',
        icon: '🔒',
        color: 'var(--kali-orange)',
        credId: 'CND-2023-XXXXX',
        domains: ['Network Monitoring', 'Firewall', 'IDS/IPS'],
    },
    {
        id: 5,
        name: 'Practical Junior Penetration Tester',
        short: 'PJPT',
        issuer: 'TCM Security',
        year: '2024',
        status: 'Active',
        icon: '⚔️',
        color: 'var(--kali-red)',
        credId: 'PJPT-2024-XXXXX',
        domains: ['Active Directory', 'Network Pentesting', 'Reporting'],
    },
    {
        id: 6,
        name: 'Google Cybersecurity Certificate',
        short: 'GCC',
        issuer: 'Google / Coursera',
        year: '2023',
        status: 'Active',
        icon: '🌟',
        color: 'var(--kali-yellow)',
        credId: 'GCC-2023-XXXXX',
        domains: ['SIEM', 'Python', 'Linux Security'],
    },
];

const learning = [
    { name: 'OSCP (Offensive Security)', progress: 65, color: 'var(--kali-purple-bright)' },
    { name: 'CRTO (Red Team Ops)', progress: 40, color: 'var(--kali-red)' },
    { name: 'AWS Security Specialty', progress: 55, color: 'var(--kali-orange)' },
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>05 // CERTIFICATIONS</div>
                    <h2 className="section-title gradient-text">Credentials &amp; Certs</h2>
                    <p className="section-subtitle">Các chứng chỉ và quá trình học tập liên tục</p>
                </div>

                {/* Certifications grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '3rem',
                }}>
                    {certifications.map((cert) => (
                        <div key={cert.id} className="cyber-card" style={{ padding: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                {/* Badge circle */}
                                <div style={{
                                    width: '56px', height: '56px', borderRadius: '12px',
                                    background: `${cert.color}18`,
                                    border: `2px solid ${cert.color}55`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.6rem', flexShrink: 0,
                                }}>
                                    {cert.icon}
                                </div>

                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <div>
                                            <span className="font-orbitron" style={{ color: cert.color, fontSize: '1rem', fontWeight: 800 }}>
                                                {cert.short}
                                            </span>
                                        </div>
                                        <span className="badge badge-green">{cert.status}</span>
                                    </div>

                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, marginTop: '0.2rem', lineHeight: 1.3 }}>
                                        {cert.name}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                                        <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                            📋 {cert.issuer}
                                        </span>
                                        <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                            📅 {cert.year}
                                        </span>
                                    </div>

                                    <div style={{ marginTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                        {cert.domains.map((d) => (
                                            <span key={d} className="badge" style={{
                                                background: `${cert.color}12`,
                                                color: cert.color,
                                                border: `1px solid ${cert.color}33`,
                                                fontSize: '0.65rem',
                                            }}>
                                                {d}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                                        ID: {cert.credId}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Currently Learning */}
                <div className="cyber-card">
                    <h3 className="font-orbitron" style={{ fontSize: '0.9rem', color: 'var(--kali-cyan)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
                        📚 CURRENTLY PURSUING
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {learning.map((item) => (
                            <div key={item.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</span>
                                    <span className="font-mono" style={{ color: item.color, fontSize: '0.85rem' }}>{item.progress}%</span>
                                </div>
                                <div style={{
                                    height: '8px',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-color)',
                                    position: 'relative',
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${item.progress}%`,
                                        background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                                        borderRadius: '4px',
                                        boxShadow: `0 0 8px ${item.color}55`,
                                        position: 'relative',
                                    }}>
                                        {/* Shimmer */}
                                        <div style={{
                                            position: 'absolute', inset: 0,
                                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                                            animation: 'shimmer 2s infinite',
                                        }} />
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontFamily: "'Share Tech Mono', monospace" }}>
                                    In Progress — est. completion Q2 2025
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </section>
    );
}
