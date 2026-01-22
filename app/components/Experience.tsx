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

                {/* Item 1: University as Professional Training */}
                <div className="group border-l-2 border-white/10 pl-8 hover:border-green-500 transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-white">Applied Computer Science Student</h3>
                    <p className="text-green-400 font-mono text-sm mb-4">Karel de Grote University College • 2023 - Present</p>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Intensive 3-year bachelor's program focused on enterprise software engineering, cloud architecture, and artificial intelligence.
                        Acting as a full-time engineer on semester-long projects simulating real-world production environments.
                    </p>

                    <h4 className="text-white font-bold mt-6 mb-2">Key Focus Areas:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-3 leading-relaxed marker:text-green-500">
                        <li>
                            <strong className="text-gray-200">Distributed Systems & Cloud:</strong> Designing microservices architectures using Spring Boot and Docker, focusing on scalability and fault tolerance.
                        </li>
                        <li>
                            <strong className="text-gray-200">AI & Machine Learning:</strong> Building predictive models and reinforcement learning agents (Deep Q-Learning) using Python, PyTorch, and TensorFlow.
                        </li>
                        <li>
                            <strong className="text-gray-200">Data Engineering:</strong> Implementing ETL pipelines and managing complex database schemas with PostgreSQL and NoSQL (MongoDB, Neo4j).
                        </li>
                        <li>
                            <strong className="text-gray-200">Embedded Systems:</strong> optimizing C++ code for hardware constraints and real-time processing on microcontrollers.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}