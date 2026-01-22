export default function Thoughts() {
    return (
        <section id="thoughts" className="py-24 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-white tracking-tight">
                Thoughts & Writing
            </h2>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-12 backdrop-blur-sm hover:border-green-500/30 transition-colors duration-300">
                <p className="text-xl text-gray-400 mb-6 font-light">
                    I am currently documenting my research in <span className="text-green-400 font-normal">Deep Reinforcement Learning</span> and system architecture.
                </p>
                <div className="inline-block px-6 py-3 border border-green-500/30 rounded-full text-green-500 font-mono text-sm bg-green-500/10 animate-pulse">
                    Articles Coming Soon
                </div>
            </div>
        </section>
    );
}