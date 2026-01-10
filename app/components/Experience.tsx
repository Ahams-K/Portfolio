export default function Experience() {
    return (
        <section id="experience" className="py-24 max-w-4xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 text-white tracking-tight">
                    Experience
                </h2>
                <div className="h-1 w-12 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">

                {/* Item 1: Your University as a "Job" */}
                <div className="group border-l-2 border-white/10 pl-8 hover:border-green-500 transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-white">Software Engineering Student</h3>
                    <p className="text-green-400 font-mono text-sm mb-4">Karel de Grote University College • 2023 - Present</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed marker:text-green-500">
                        <li>Specializing in full-stack development and embedded systems design.</li>
                        <li>Lead Developer for the "Eval E-Bike" project, managing a team of 4 students.</li>
                        <li>Completed intensive coursework in Data Structures, Algorithms, and Distributed Systems.</li>
                    </ul>
                </div>

                {/* Item 2: Any Leadership or Hackathons */}
                <div className="group border-l-2 border-white/10 pl-8 hover:border-green-500 transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-white">Freelance & Open Source</h3>
                    <p className="text-green-400 font-mono text-sm mb-4">Self-Employed • 2023 - Present</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed marker:text-green-500">
                        <li>Building custom web solutions for local clients using React and Tailwind CSS.</li>
                        <li>Active contributor to GitHub repositories focused on AI and machine learning tools.</li>
                        <li>Continuously upskilling in modern frameworks like Next.js 14 and Spring Boot.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}