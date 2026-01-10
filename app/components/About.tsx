export default function About() {
    return (
        <section id="about" className="py-24 max-w-4xl mx-auto text-center">
            {/* Noah-style Header */}
            <h2 className="text-5xl font-bold mb-8 text-white tracking-tight">
                About
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
            </h2>

            {/* Large, readable text */}
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                I'm a software engineer building intelligent systems that actually make a difference.
                Startups and business tech? That's my game.
            </p>
        </section>
    );
}