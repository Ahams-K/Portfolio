import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 md:py-0">

            {/* Left Side: Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left mt-10 md:mt-0 z-10">
                <h1 className="text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter text-white leading-tight">
                    Kingsley<br />
                    Ahams<span className="text-green-500 animate-pulse">_</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                    Final Year Student at <span className="text-green-400 font-medium">Karel De Grote</span>
                </h2>

                <p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    I build and learn software. Looking to improve my skills and create systems that matter.
                </p>

                {/* Optional Buttons */}
                <div className="pt-6 flex gap-4 justify-center md:justify-start">
                    <a href="#projects" className="px-8 py-3 bg-white text-black font-mono font-bold rounded hover:bg-green-400 transition-colors">
                        View projects
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-mono rounded hover:bg-white/10 transition-colors">
                        Contact
                    </a>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 flex justify-center md:justify-end relative w-full">

                {/* 1. The Green Glow Effect (Behind the image) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-green-500/20 blur-[100px] rounded-full"></div>

                {/* 2. The Image Container */}
                <div className="relative w-72 h-72 md:w-[400px] md:h-[500px] border border-white/10 rounded-2xl overflow-hidden bg-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
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