'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8 mt-20">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Identity */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xl font-bold tracking-tighter text-white">
                                &lt;KA/&gt;
                            </span>
                            <span className="text-white font-bold text-lg">Kingsley Ahams</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Full-Stack Engineer & <br />
                            AI/ML Researcher
                        </p>
                        <p className="text-gray-600 text-xs mt-4">
                            &copy; {new Date().getFullYear()} Kingsley Ahams.<br />
                            Antwerp, Belgium.
                        </p>
                    </div>

                    {/* Column 2: Status - Building */}
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-green-400 bg-green-400/10 rounded-full">
                            Building
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Finalizing <strong className="text-gray-300">BanditGames</strong>, a scalable gaming platform exploring AI-driven opponent difficulty.
                        </p>
                    </div>

                    {/* Column 3: Status - Learning */}
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-blue-400 bg-blue-400/10 rounded-full">
                            Learning
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Deep diving into <strong className="text-gray-300">Distributed Systems</strong> patterns and advanced <strong className="text-gray-300">Reinforcement Learning</strong> algorithms (PPO/DQN).
                        </p>
                    </div>

                    {/* Column 4: Connect */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-sm">Connect</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://github.com/Ahams-K" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 text-sm flex items-center gap-2 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/kingsley-ahams-b92142274" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kingsleyahams12@gmail.com" className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}