'use client';

import { useState } from 'react';

const socialLinks = [
    { icon: '🐙', name: 'GitHub', handle: '@TonAnhHao', url: 'https://github.com', color: 'var(--kali-purple-bright)' },
    { icon: '💼', name: 'LinkedIn', handle: 'Tôn Anh Hào', url: 'https://linkedin.com', color: 'var(--kali-cyan)' },
    { icon: '🐦', name: 'Twitter / X', handle: '@0xHao_dev', url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: '📧', name: 'Email', handle: 'hao@dev.io', url: 'mailto:hao@dev.io', color: 'var(--kali-green)' },
];

const services = [
    { icon: '🌐', title: 'Fullstack Development', desc: 'React, Next.js, Node.js, APIs', color: 'var(--kali-purple-bright)' },
    { icon: '🤖', title: 'AI Integration', desc: 'LLMs, RAG, custom ML models', color: 'var(--kali-cyan)' },
    { icon: '🔒', title: 'Security Audit', desc: 'Web pentesting, OWASP, code review', color: 'var(--kali-green)' },
    { icon: '⚙️', title: 'System Architecture', desc: 'Scalable, secure by design', color: 'var(--kali-orange)' },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [termLines, setTermLines] = useState([
        '> Initializing connection...',
        '> Encryption: TLS 1.3 — OK',
        '> Ready to receive your message.',
    ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setTermLines((p) => [...p, `> Sending from ${formData.name}...`]);
        await new Promise((r) => setTimeout(r, 1800));
        setTermLines((p) => [...p, '> Encrypting payload...', '> Transmitting...', '> ✓ Message delivered! Expect a reply in 24h.']);
        setSending(false);
        setSent(true);
    };

    const inputStyle = {
        width: '100%',
        padding: '0.65rem 0.85rem',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        color: 'var(--text-primary)',
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'border-color 0.2s ease',
    } as React.CSSProperties;

    return (
        <section id="contact" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>04 // CONTACT</div>
                    <h2 className="section-title gradient-text">Let&apos;s Work Together</h2>
                    <p className="section-subtitle">Have a project in mind? Let&apos;s build something great.</p>
                </div>

                {/* Services row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '3rem',
                }}>
                    {services.map((s) => (
                        <div key={s.title} className="cyber-card" style={{ padding: '1rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{s.icon}</div>
                            <div className="font-orbitron" style={{ fontSize: '0.78rem', color: s.color, fontWeight: 700, marginBottom: '0.3rem' }}>{s.title}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{s.desc}</div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

                    {/* Left */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {/* Social links */}
                        <div className="cyber-card">
                            <h3 className="font-orbitron" style={{ fontSize: '0.82rem', color: 'var(--kali-purple-bright)', marginBottom: '1.1rem', letterSpacing: '0.1em' }}>
                                📡 FIND ME ON
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target={s.url.startsWith('mailto') ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                                            padding: '0.6rem 0.85rem',
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = s.color;
                                            (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}10`;
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                                            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--bg-secondary)';
                                        }}
                                    >
                                        <span style={{ fontSize: '1.15rem' }}>{s.icon}</span>
                                        <div>
                                            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'Share Tech Mono', monospace" }}>{s.name}</div>
                                            <div style={{ fontWeight: 600, color: s.color, fontSize: '0.88rem' }}>{s.handle}</div>
                                        </div>
                                        <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>→</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Terminal */}
                        <div className="terminal-box">
                            <div className="terminal-header">
                                <div className="terminal-dot" style={{ background: '#ff5f56' }} />
                                <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                                <div className="terminal-dot" style={{ background: '#27c93f' }} />
                                <span className="font-mono" style={{ marginLeft: '0.5rem', color: '#555', fontSize: '0.72rem' }}>~/contact/send.sh</span>
                            </div>
                            <div className="terminal-body" style={{ fontSize: '0.76rem', lineHeight: 2 }}>
                                {termLines.map((line, i) => (
                                    <div key={i} style={{ color: line.includes('✓') ? 'var(--kali-green)' : '#94a3b8' }}>{line}</div>
                                ))}
                                {sending && <span className="cursor-blink" style={{ color: 'var(--kali-purple-bright)' }}>█</span>}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="cyber-card">
                        <h3 className="font-orbitron" style={{ fontSize: '0.82rem', color: 'var(--kali-cyan)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
                            📨 SEND A MESSAGE
                        </h3>

                        {sent ? (
                            <div style={{
                                padding: '2rem', textAlign: 'center',
                                background: 'var(--kali-green-glow)',
                                border: '1px solid var(--kali-green)',
                                borderRadius: '8px',
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <div className="font-orbitron" style={{ color: 'var(--kali-green)', marginBottom: '0.5rem' }}>Message Sent!</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                                </p>
                                <button className="btn-outline" style={{ marginTop: '1.5rem', color: 'var(--kali-green)', borderColor: 'var(--kali-green)' }}
                                    onClick={() => { setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); setTermLines(['> Ready for new connection...']); }}>
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label className="font-mono" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--kali-purple-bright)', marginBottom: '0.4rem' }}>NAME *</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange}
                                            placeholder="Your name" style={inputStyle}
                                            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--kali-purple-bright)'; }}
                                            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-color)'; }}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-mono" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--kali-purple-bright)', marginBottom: '0.4rem' }}>EMAIL *</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                            placeholder="your@email.com" style={inputStyle}
                                            onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--kali-purple-bright)'; }}
                                            onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-color)'; }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-mono" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--kali-purple-bright)', marginBottom: '0.4rem' }}>I&apos;M INTERESTED IN *</label>
                                    <select name="subject" required value={formData.subject} onChange={handleChange}
                                        style={{ ...inputStyle, cursor: 'pointer', color: formData.subject ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                                        <option value="">Select a service...</option>
                                        <option value="fullstack">Fullstack Development</option>
                                        <option value="ai">AI / ML Integration</option>
                                        <option value="security">Security Audit / Pentest</option>
                                        <option value="freelance">Freelance Project</option>
                                        <option value="job">Job Opportunity</option>
                                        <option value="collab">Open Source Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="font-mono" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--kali-purple-bright)', marginBottom: '0.4rem' }}>MESSAGE *</label>
                                    <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                                        placeholder="Tell me about your project or idea..."
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                        onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--kali-purple-bright)'; }}
                                        onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border-color)'; }}
                                    />
                                </div>

                                <button type="submit" className="btn-primary"
                                    disabled={sending}
                                    style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                                >
                                    {sending ? <>🔄 Sending...</> : <>🚀 Send Message</>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
