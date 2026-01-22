export default function About() {
    return (
        <section id="about" className="py-24 max-w-7xl mx-auto px-6">

            {/* 1. THE BIO */}
            <div className="text-center mb-24 max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-8 text-white tracking-tight">
                    About Me
                    <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                    <p>
                        I am a <strong className="text-white">Computer Science Student</strong> at Karel de Grote,
                        specializing in <span className="text-green-400">Artificial Intelligence</span> and
                        <span className="text-green-400"> Distributed Systems</span>.
                    </p>
                    <p>
                        I don't just write code; I focus on engineering <strong className="text-white">production-grade solutions</strong>.
                        Whether I'm architecting microservices or training reinforcement learning agents, my goal is to
                        bridge the gap between theoretical concepts and high-performance software.
                    </p>
                </div>
            </div>

            {/* 2. THE SYSTEM MONITOR (Skills Loaded + Cool Icons) */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-white/10 flex-1"></div>
                    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Engineering Stack</span>
                    <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* MONITOR 1: BACKEND (Server Icon) */}
                    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-green-500/50 transition-all duration-300 group relative overflow-hidden">
                        {/* Faded Background Icon */}
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110 rotate-12">
                            <svg className="w-32 h-32 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <h3 className="text-green-400 font-mono font-bold uppercase text-xs tracking-widest">Backend Systems</h3>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px] relative z-10">
                            Architecting scalable, event-driven microservices for enterprise workflows.
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {['Java', 'Spring Boot', 'C#', '.NET 9', 'FastAPI', 'PostgreSQL', 'Redis', 'Microservices'].map((tech) => (
                                <span key={tech} className="px-2 py-1 text-[10px] font-mono text-gray-300 border border-white/10 bg-white/5 rounded hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/30 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MONITOR 2: AI & DATA (The Test Tube / Lab Icon) */}
                    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden">
                        {/* Faded Background Icon - BEAKER/TEST TUBE */}
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110 rotate-12">
                            <svg className="w-32 h-32 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <h3 className="text-blue-400 font-mono font-bold uppercase text-xs tracking-widest">AI & Research</h3>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px] relative z-10">
                            Training predictive models and deep reinforcement learning agents.
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Deep RL', 'Computer Vision'].map((tech) => (
                                <span key={tech} className="px-2 py-1 text-[10px] font-mono text-gray-300 border border-white/10 bg-white/5 rounded hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MONITOR 3: MLOps (Gears/Infrastructure Icon) */}
                    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden">
                        {/* Faded Background Icon - GEARS/CHIP */}
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110 rotate-12">
                            <svg className="w-32 h-32 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <h3 className="text-purple-400 font-mono font-bold uppercase text-xs tracking-widest">MLOps Pipeline</h3>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px] relative z-10">
                            Automating model training pipelines and containerized deployments.
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {['Docker', 'MLflow', 'DVC', 'Git', 'CI/CD', 'Linux', 'Azure'].map((tech) => (
                                <span key={tech} className="px-2 py-1 text-[10px] font-mono text-gray-300 border border-white/10 bg-white/5 rounded hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/30 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MONITOR 4: FRONTEND (Code Window Icon) */}
                    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-orange-500/50 transition-all duration-300 group relative overflow-hidden">
                        {/* Faded Background Icon - CODE WINDOW */}
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110 rotate-12">
                            <svg className="w-32 h-32 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <h3 className="text-orange-400 font-mono font-bold uppercase text-xs tracking-widest">Interface</h3>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px] relative z-10">
                            Building responsive dashboards to visualize complex system data.
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5'].map((tech) => (
                                <span key={tech} className="px-2 py-1 text-[10px] font-mono text-gray-300 border border-white/10 bg-white/5 rounded hover:bg-orange-500/20 hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}