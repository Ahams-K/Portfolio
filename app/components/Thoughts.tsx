'use client';

import Link from 'next/link';

export default function Thoughts() {
    return (
        <section id="thoughts" className="py-24 max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-white tracking-tight text-center">
                Thoughts & Writing
            </h2>

            <div className="space-y-8">
                <div className="group border border-white/10 bg-white/5 rounded-3xl p-8 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 text-sm text-green-400 font-mono mb-3">
                                <span>April 2026</span>
                                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                <span>Article • 12 min read</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-4 leading-tight">
                                The TrakSYS Paradox: How We Used MCP to Bridge the Gap Between Raw Data and Real Answers
                            </h3>

                            <p className="text-gray-400 text-base leading-relaxed mb-6">
                                Companies invest millions in sensors and TrakSYS MES, but factory teams still can't get simple answers like
                                "Why did Line 3 stop yesterday?" We built a natural language MCP interface that turns 427 complex tables
                                into instant expert answers.
                            </p>

                            <Link
                                href="/thoughts/traksys-paradox"
                                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium group-hover:gap-3 transition-all"
                            >
                                Read the full article →
                            </Link>
                        </div>

                        <div className="hidden md:block w-52 h-52 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl border border-white/10 flex-shrink-0 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-6xl text-green-400/30 font-mono">
                                MCP
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-16">
                More articles coming soon — Deep Reinforcement Learning research + system architecture deep dives
            </p>
        </section>
    );
}