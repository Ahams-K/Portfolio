import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-10 md:py-0">

            {/* Left Side: Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left mt-12 md:mt-0 z-10">
                <h1 className="text-4xl md:text-7xl font-mono font-bold uppercase tracking-tighter text-white leading-tight">
                    Kingsley<br />
                    Ahams<span className="text-green-500 animate-pulse">_</span>
                </h1>

                <h2 className="text-lg md:text-2xl text-gray-300 font-light max-w-md mx-auto md:mx-0">
                    Final Year Student at <span className="text-green-400 font-medium">Karel De Grote</span>
                </h2>

                <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    I build and learn software. Looking to improve my skills and create systems that matter.
                </p>

                {/* Buttons */}
                <div className="pt-6 flex gap-4 justify-center md:justify-start">
                    <a href="#projects" className="px-6 py-3 md:px-8 bg-white text-black font-mono font-bold rounded hover:bg-green-400 transition-colors text-sm md:text-base">
                        View Work
                    </a>
                    <a href="#contact" className="px-6 py-3 md:px-8 border border-white/20 text-white font-mono rounded hover:bg-white/10 transition-colors text-sm md:text-base">
                        Contact
                    </a>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 flex justify-center md:justify-end relative w-full">

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-green-500/20 blur-[80px] md:blur-[100px] rounded-full"></div>

                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-[400px] md:h-[500px] border border-white/10 rounded-2xl overflow-hidden bg-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                    <Image
                        src="/images/img.png"
                        alt="Kingsley Ahams"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}