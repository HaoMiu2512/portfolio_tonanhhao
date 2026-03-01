'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute('data-theme', saved);
        }
    }, []);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
        const sections = navLinks.map((l) => l.id);
        for (const id of [...sections].reverse()) {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 100) {
                    setActiveSection(id);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                id="navbar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: scrolled ? 'var(--navbar-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                    padding: '0 1.5rem',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('home')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <div style={{
                            width: '34px', height: '34px',
                            background: 'linear-gradient(135deg, var(--kali-purple) 0%, var(--kali-cyan) 100%)',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem', boxShadow: '0 0 12px var(--kali-purple-glow)',
                        }}>
                            ⚡
                        </div>
                        <span className="font-orbitron" style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                            <span style={{ color: 'var(--kali-purple-bright)' }}>HAO</span>
                            <span style={{ color: 'var(--kali-cyan)' }}>.DEV</span>
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                style={{
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.06em',
                                    color: activeSection === link.id ? 'var(--kali-purple-bright)' : 'var(--text-secondary)',
                                    background: activeSection === link.id ? 'var(--kali-purple-glow)' : 'transparent',
                                    transition: 'all 0.2s ease',
                                    textTransform: 'uppercase',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeSection !== link.id) {
                                        (e.target as HTMLButtonElement).style.color = 'var(--text-primary)';
                                        (e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeSection !== link.id) {
                                        (e.target as HTMLButtonElement).style.color = 'var(--text-secondary)';
                                        (e.target as HTMLButtonElement).style.background = 'transparent';
                                    }
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {/* Theme Toggle */}
                        <button
                            id="theme-toggle"
                            onClick={toggleTheme}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            style={{
                                width: '42px', height: '42px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget).style.borderColor = 'var(--kali-purple-bright)';
                                (e.currentTarget).style.boxShadow = 'var(--shadow-purple)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget).style.borderColor = 'var(--border-color)';
                                (e.currentTarget).style.boxShadow = 'none';
                            }}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>

                        {/* Hamburger */}
                        <button
                            id="menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="mobile-menu-btn"
                            style={{
                                width: '42px', height: '42px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                display: 'none',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--kali-purple-bright)' : 'var(--text-primary)', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                            <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--text-primary)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
                            <span style={{ display: 'block', width: '18px', height: '2px', background: menuOpen ? 'var(--kali-purple-bright)' : 'var(--text-primary)', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div style={{
                        background: 'var(--bg-secondary)',
                        borderTop: '1px solid var(--border-color)',
                        borderBottom: '1px solid var(--border-color)',
                        padding: '1rem 1.5rem',
                    }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                style={{
                                    display: 'block', width: '100%', textAlign: 'left',
                                    background: 'none', border: 'none',
                                    padding: '0.75rem 0', cursor: 'pointer',
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: '1rem', fontWeight: 600, letterSpacing: '0.06em',
                                    color: activeSection === link.id ? 'var(--kali-purple-bright)' : 'var(--text-secondary)',
                                    borderBottom: '1px solid var(--border-color)',
                                    textTransform: 'uppercase',
                                }}
                            >
                                &gt; {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
