'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './resume.css';

export default function ResumePage() {
    const [isGenerating, setIsGenerating] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString());
    }, []);

    const downloadPDF = async () => {
        setIsGenerating(true);
        try {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = document.getElementById('main-resume');

            if (!element) {
                console.error('Resume element not found');
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const opt: any = {
                margin:       [10, 10, 10, 10],
                filename:     'Kingsley_Ahams_Resume.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error("PDF Generation failed", error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="resume-wrapper">
                <div className="resume-container-width">

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Resume</h1>
                        <p className="text-gray-300 mb-6">Professional & Single-Page Format</p>

                        <button
                            onClick={downloadPDF}
                            disabled={isGenerating}
                            className="px-6 py-3 bg-green-500 text-black font-mono font-bold rounded hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] disabled:opacity-50"
                        >
                            {isGenerating ? 'Generating PDF...' : 'Download PDF ⬇️'}
                        </button>
                    </div>

                    {/* ================= MAIN RESUME ================= */}
                    <div className="resume-content">
                        <div className="resume-preview">
                            <div id="main-resume" className="resume-paper">

                                {/* HEADER */}
                                <div style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '20px', marginBottom: '25px' }}>
                                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 10px 0', textTransform: 'uppercase' }}>Kingsley Ahams</h1>
                                    <div className="contact-details" style={{ fontSize: '0.95rem', color: '#555' }}>
                                        Antwerp, Belgium | +32 465 78 75 55 | kingleyahams12@gmail.com<br/>
                                        <a href="https://linkedin.com/in/kingsley-ahams" style={{ color: '#0077b5', textDecoration: 'none' }}>LinkedIn</a> |
                                        <a href="https://github.com/Ahams-K" style={{ color: '#333', textDecoration: 'none', marginLeft: '5px' }}>GitHub</a>
                                    </div>
                                </div>

                                {/* PROFILE */}
                                <div className="mb-6">
                                    <h2 style={{ fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', color: '#000' }}>Professional Profile</h2>
                                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                                        Dynamic Software Engineer and Computer Science student with specialized expertise in building production-ready AI/ML systems and scalable cloud infrastructure. Proficient in full-stack development (Spring Boot, React), MLOps pipelines (MLflow, DVC), and database management. Proven ability to deliver complex technical projects in agile team environments, demonstrating strong problem-solving skills and a commitment to high-quality code.
                                    </p>
                                </div>

                                {/* EDUCATION */}
                                <div className="mb-6">
                                    <h2 style={{ fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', color: '#000' }}>Education</h2>

                                    <div className="education-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                            <span>Karel de Grote University College</span>
                                            <span>Antwerp, Belgium</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', marginBottom: '8px' }}>
                                            <span>Bachelor of Science, Applied Computer Science</span>
                                            <span>Expected Aug 2026</span>
                                        </div>

                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '8px' }}>
                                            Final-year bachelor's student in Applied Computer Science with in-depth training in software development, programming, databases, IT infrastructure, and data science. Gained practical experience in machine learning, cloud technologies, and AI through project-based modules and teamwork. Developed strong skills in full-stack engineering, business collaboration, and problem-solving in real and simulated tech environments.
                                        </p>

                                        <p style={{ fontSize: '0.9rem' }}>
                                            <strong>Focus:</strong> Machine Learning, Deep Reinforcement Learning, MLOps, Big Data Processing, Distributed Systems.
                                        </p>
                                    </div>
                                </div>

                                {/* TECHNICAL SKILLS */}
                                <div className="mb-6">
                                    <h2 style={{ fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', color: '#000' }}>Technical Skills</h2>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.95rem' }}>
                                        <div><strong>Languages:</strong> Python, Java, C++, SQL, TypeScript</div>
                                        <div><strong>Back-End:</strong> Spring Boot, RESTful APIs, Microservices, .NET</div>
                                        <div><strong>Front-End:</strong> React.js, Next.js, HTML/CSS, Bootstrap</div>
                                        <div><strong>AI/ML:</strong> PyTorch, TensorFlow, Stable Baselines3</div>
                                        <div><strong>Tools & Processes:</strong> Git, Docker, MLflow, CI/CD, Unit Testing</div>
                                        <div><strong>Databases:</strong> PostgreSQL, SQL Server, MongoDB</div>
                                    </div>
                                </div>

                                {/* PROJECTS */}
                                <div className="mb-6">
                                    <h2 style={{ fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', color: '#000' }}>Projects</h2>

                                    <div className="project-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <strong>MCP Server for Traksys MES – Natural Language Production Intelligence</strong>
                                            <span style={{ fontStyle: 'italic' }}>2026</span>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', marginTop: '5px' }}>
                                            <li>Designed and developed a Natural Language Interface (MCP Server) on top of Traksys Manufacturing Execution System (MES) to enable non-technical users to query live production data using plain English.</li>
                                            <li>Implemented semantic search and context-aware query understanding to translate natural language into optimized database queries.</li>
                                            <li>Built a semantic layer that automatically handles complex SQL joins, table relationships, and downtime analysis across production lines, sensors, maintenance schedules, and logs.</li>
                                            <li>Reduced query time from ~2 hours of manual SQL writing/debugging to under 10 seconds, dramatically improving operational decision-making for plant managers and executives.</li>
                                            <li>Integrated React frontend with real-time dashboard visualization and demonstrated the system in team presentations, showcasing instant root-cause analysis for production line failures.</li>
                                            <li>Technologies: Next.js, TypeScript, SQL (PostgreSQL/SQL Server), semantic querying, API development.</li>
                                        </ul>
                                    </div>

                                    {/* 1. BanditGames */}
                                    <div className="project-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <strong>BanditGames - AI-Powered Gaming Platform</strong>
                                            <span style={{ fontStyle: 'italic' }}>2025</span>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', marginTop: '5px' }}>
                                            <li>Built an enterprise-ready gaming platform integrating Spring Boot microservices, React frontend, and PostgreSQL.</li>
                                            <li>Enabled device tracking, real-time inventory, transaction and audit logging for game states.</li>
                                            <li>Applied full-stack development, API design, database modeling, and enterprise authentication for scalable control.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Deep RL */}
                                    <div className="project-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <strong>Deep Reinforcement Learning System</strong>
                                            <span style={{ fontStyle: 'italic' }}>2025</span>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', marginTop: '5px' }}>
                                            <li>Implemented and benchmarked DRL algorithms (PPO, SAC, DQN) using Stable Baselines3 on a custom Gymnasium environment.</li>
                                            <li>Optimized system performance achieving 40% faster convergence and high average return through reward engineering.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Computer Vision (Moved Up) */}
                                    <div className="project-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <strong>Computer Vision Transfer Learning System</strong>
                                            <span style={{ fontStyle: 'italic' }}>2025</span>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', marginTop: '5px' }}>
                                            <li>Built a computer vision system on custom datasets using Transfer Learning and Fine-tuning techniques.</li>
                                            <li>Achieved high accuracy (92%) and delivered the project as a FastAPI REST API for predictions.</li>
                                        </ul>
                                    </div>

                                    {/* 4. Eval E-Bike (Moved Down) */}
                                    <div className="project-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <strong>Eval E-Bike Diagnostic Platform</strong>
                                            <span style={{ fontStyle: 'italic' }}>2024</span>
                                        </div>
                                        <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', marginTop: '5px' }}>
                                            <li>Lead Developer for a comprehensive diagnostic tool interfacing with e-bike hardware via serial protocols.</li>
                                            <li>Built a robust Java backend to process telemetry data in real-time, generating battery health reports for technicians.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* LEADERSHIP SECTION (Removed Open Source) */}
                                <div className="mb-6">
                                    <h2 style={{ fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', color: '#000' }}>Leadership & Activities</h2>

                                    <div className="project-item" style={{ marginBottom: '15px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <strong>Lead Developer, University Group Project</strong>
                                            <span style={{ fontStyle: 'italic' }}>2024</span>
                                        </div>
                                        <p style={{ fontSize: '0.95rem', marginTop: '5px' }}>
                                            Led a team of 4 students in the "Eval E-Bike" project. Managed sprint planning, code reviews, and architectural decision-making, ensuring successful delivery of all client requirements.
                                        </p>
                                    </div>
                                </div>

                                {/* ADDITIONAL INFO */}
                                <div>
                                    <h2 style={{ fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', color: '#000' }}>Additional Information</h2>
                                    <p style={{ fontSize: '0.95rem' }}>
                                        <strong>Languages:</strong> English (Native/Fluent), Dutch (Basic A2)
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}