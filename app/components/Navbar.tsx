'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // 1. SCROLL SPY LOGIC (Highlights current section)
    useEffect(() => {
        if (pathname !== '/') return;
        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Active if section is near top of screen
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // 2. THE PUSH LOGIC (Shoves page down when menu opens)
    useEffect(() => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            if (isMobileMenuOpen) {
                // Push content down by 320px
                mainContent.style.transform = 'translateY(320px)';
            } else {
                // Reset content position
                mainContent.style.transform = 'translateY(0)';
            }
        }
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Work', href: '/#projects' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <>
            {/* MAIN NAVBAR STRIP */}
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/80 transition-all duration-300">
                <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center relative z-[60]">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-mono text-xl font-bold tracking-tighter text-white hover:text-green-400 transition-colors"
                        onClick={closeMobileMenu}
                    >
                        &lt;KA/&gt;
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8 text-sm font-mono text-gray-400">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`transition-all duration-300 relative ${activeSection === link.href.substring(2) ? 'text-white font-bold' : 'hover:text-white'}`}
                                    >
                                        {link.name}
                                        {activeSection === link.href.substring(2) && (
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/resume"
                            className="px-5 py-2 text-sm font-mono font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                        >
                            Resumé
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>


            <div
                className={`
                    fixed top-16 left-0 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl z-40
                    flex flex-col items-center py-8 space-y-6
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                `}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMobileMenu}
                        // Added Dynamic Active Styling Here!
                        className={`
                            text-xl font-mono transition-colors font-medium tracking-wide
                            ${activeSection === link.href.substring(2) ? 'text-white font-bold' : 'text-gray-400 hover:text-green-400'}
                        `}
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="h-px w-16 bg-white/10 my-2"></div>

                <Link
                    href="/resume"
                    onClick={closeMobileMenu}
                    className="px-8 py-3 text-base font-mono font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                    View Resumé
                </Link>
            </div>
        </>
    );
}