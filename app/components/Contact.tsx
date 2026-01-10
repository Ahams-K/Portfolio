export default function Contact() {
    return (
        <section id="contact" className="py-32 max-w-4xl mx-auto text-center px-6">

            {/* Header */}
            <div className="mb-12">
                <h2 className="text-5xl font-bold mb-4 text-white tracking-tight">
                    Get In Touch
                </h2>
                <div className="h-1 w-12 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question
                or just want to say hi, my inbox is always open.
            </p>

            {/* Email Button */}
            <a
                href="mailto:kingsleyahams12@gmail.com"
                className="inline-block border border-green-500 text-green-500 px-10 py-4 rounded-full font-mono text-lg hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            >
                Say Hello
            </a>

            {/* Social Links with Icons */}
            <div className="mt-20 flex justify-center items-center gap-10">

                {/* GitHub Link */}
                <a
                    href="https://github.com/Ahams-K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                    <svg
                        className="w-6 h-6 group-hover:text-green-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="font-mono text-sm group-hover:underline decoration-green-500 underline-offset-4">GitHub</span>
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/kingsley-ahams-b92142274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                    <svg
                        className="w-6 h-6 group-hover:text-blue-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                    <span className="font-mono text-sm group-hover:underline decoration-blue-500 underline-offset-4">LinkedIn</span>
                </a>

            </div>
        </section>
    );
}