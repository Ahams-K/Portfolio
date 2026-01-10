'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname(); // To check if we are on the home page or resume page

    // Only run scroll spy on the home page
    useEffect(() => {
        if (pathname !== '/') return;

        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Work', href: '/#projects' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/60 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono text-xl font-bold tracking-tighter text-white hover:text-green-400 transition-colors"
                >
                    &lt;KA/&gt;
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`
                                        transition-all duration-300 relative
                                        ${activeSection === link.href.substring(2) ? 'text-white font-bold' : 'hover:text-white'}
                                    `}
                                >
                                    {link.name}
                                    {activeSection === link.href.substring(2) && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* The New Resume Button */}
                    <Link
                        href="/resume"
                        className="px-5 py-2 text-sm font-mono font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                    >
                        Resumé
                    </Link>
                </div>
            </div>
        </nav>
    );
}