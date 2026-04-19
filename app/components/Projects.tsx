export default function Projects() {
    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 text-white tracking-tight">
                    Projects
                </h2>
                <div className="h-1 w-12 bg-green-500 mx-auto rounded-full"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Project 1: Gaming Platform (The Big One) */}
                <div className="group border border-white/10 bg-white/5 p-8 rounded-2xl hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                    <div className="mb-auto">
                        <h3 className="font-bold text-2xl font-mono text-white group-hover:text-green-400 transition-colors">
                            AI Gaming Hub
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-4 font-mono">Full Stack & Machine Learning</p>

                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            A scalable gaming platform that allows developers to register and host custom games.
                            Features a "Connect Four" engine with an AI opponent, utilizing MLflow for tracking game statistics
                            and predictive modeling on player behavior.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">React</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Spring Boot</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">MLflow</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Java</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Python</span>
                    </div>
                </div>

                {/* Project 2: E-Bike Tester */}
                <div className="group border border-white/10 bg-white/5 p-8 rounded-2xl hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                    <div className="mb-auto">
                        <h3 className="font-bold text-2xl font-mono text-white group-hover:text-green-400 transition-colors">
                            Eval E-Bike
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-4 font-mono">Diagnostic Web Platform</p>

                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            A comprehensive diagnostic tool for electric bicycles. The system interfaces with e-bike hardware
                            to run electrical health tests and auto-generates detailed battery health reports for technicians.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Java</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Spring Boot</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">JavaScript</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Bootstrap</span>
                    </div>
                </div>

                {/* Project 3: Embedded Square Game */}
                <div className="group border border-white/10 bg-white/5 p-8 rounded-2xl hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                    <div className="mb-auto">
                        <h3 className="font-bold text-2xl font-mono text-white group-hover:text-green-400 transition-colors">
                            Square: Embedded Reflex
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-4 font-mono">Hardware & Embedded Systems</p>

                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            A real-time reflex game programmed directly onto an Arduino microcontroller using C++.
                            Players control a "Square" entity to dodge incoming projectiles on a hardware display,
                            optimizing memory usage for limited embedded resources.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">C++</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Arduino</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Embedded C</span>
                    </div>
                </div>

                {/* Project 4: Real Estate Manager */}
                <div className="group border border-white/10 bg-white/5 p-8 rounded-2xl hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                    <div className="mb-auto">
                        <h3 className="font-bold text-2xl font-mono text-white group-hover:text-green-400 transition-colors">
                            Traksys MCP
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-4 font-mono">Natural Language MES Interface</p>

                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            A natural language query interface built on top of the Traksys Manufacturing Execution System (MES).
                            Enables plant managers and executives to ask complex production questions in plain English
                            and instantly receive root-cause analysis, replacing hours of manual SQL joins and debugging.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Langfuse</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">Python</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">PostgreSQL</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">SQL</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">SQL Server</span>
                        <span className="text-xs font-mono bg-black/50 border border-white/10 px-3 py-1 rounded-full text-green-400">OpenWeb-ui</span>
                    </div>
                </div>

            </div>
        </section>
    );
}