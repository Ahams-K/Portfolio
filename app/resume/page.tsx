'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './resume.css';

export default function ResumePage() {
    const [activeTab, setActiveTab] = useState('germany');
    const [isGenerating, setIsGenerating] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString());
    }, []);

    const downloadPDF = async (elementId: string, filename: string) => {
        setIsGenerating(true);
        try {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = document.getElementById(elementId);

            // FIX 1: Safety check. If element is null, stop.
            if (!element) {
                console.error(`Element with id ${elementId} not found`);
                return;
            }

            // FIX 2: Disable the specific linting rule for this line
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const opt: any = {
                margin:       [10, 10, 10, 10],
                filename:     filename,
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

                    <h1 className="resume-title">🚀 Internship-Ready Resume</h1>
                    <p className="resume-subtitle">AI/ML, Data Engineering & Full-Stack Development Ready</p>

                    {/* Tabs */}
                    <div className="resume-tabs">
                        {['germany', 'netherlands', 'spain', 'canada'].map((country) => (
                            <div
                                key={country}
                                className={`resume-tab ${activeTab === country ? 'active' : ''}`}
                                onClick={() => setActiveTab(country)}
                                style={{textTransform: 'capitalize'}}
                            >
                                {country === 'germany' && '🇩🇪 Germany'}
                                {country === 'netherlands' && '🇳🇱 Netherlands'}
                                {country === 'spain' && '🇪🇸 Spain'}
                                {country === 'canada' && '🇨🇦 Canada'}
                            </div>
                        ))}
                    </div>

                    {/* ================= GERMANY ================= */}
                    {activeTab === 'germany' && (
                        <div className="resume-content">
                            <div className="resume-header-bar">
                                <div>
                                    <h2 style={{ margin: 0, textShadow: 'none', color: 'white', border: 'none' }}>German CV (Lebenslauf)</h2>
                                    <p style={{ opacity: 0.9, marginTop: '5px' }}>Standard Format with Detailed Projects</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => downloadPDF('germany-resume', 'Kingsley_Ahams_Lebenslauf.pdf')}
                                        disabled={isGenerating}
                                        className="px-4 py-2 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100 transition disabled:opacity-50 text-sm"
                                    >
                                        {isGenerating ? 'Generating...' : 'Download PDF ⬇️'}
                                    </button>
                                    <span className="country-flag">🇩🇪</span>
                                </div>
                            </div>

                            <div className="resume-preview">
                                <div id="germany-resume" className="resume-paper">
                                    <div className="profile-section">
                                        <div className="photo-placeholder">
                                            [Paste Your<br/>Professional Photo<br/>Here]
                                        </div>
                                        <div className="contact-info">
                                            <h1>KINGSLEY AHAMS</h1>
                                            <div className="contact-details">
                                                <strong>Persönliche Daten / Personal Information</strong><br/>
                                                Geburtsdatum / Date of Birth: 19.05.2005<br/>
                                                Nationalität / Nationality: Nigerian<br/>
                                                Adresse / Address: Antwerpen, Belgium<br/>
                                                Telefon / Phone: +32 465 78 75 55<br/>
                                                E-Mail: kingley.ahams@student.kdg.be<br/>
                                                GitHub: github.com/Ahams-K | LinkedIn: linkedin.com/in/kingsley-ahams
                                            </div>
                                        </div>
                                    </div>

                                    <h2>BERUFLICHES PROFIL / PROFESSIONAL PROFILE</h2>
                                    <p>Applied Computer Science student specializing in AI/ML systems, data engineering, and full-stack development. Experienced in building production-ready machine learning pipelines, deep reinforcement learning systems, and scalable data infrastructure. Proficient in Python, Java, MLOps tools (MLFlow, DVC, TensorBoard), and modern development frameworks.</p>

                                    <h2>AUSBILDUNG / EDUCATION</h2>
                                    <div className="education-item">
                                        <h3>BSc Applied Computer Science</h3>
                                        <div className="meta">Karel de Grote University College, Antwerp, Belgium | Expected: 2026</div>
                                        <strong>Relevant Coursework:</strong>
                                        <ul>
                                            <li>Deep Learning & Computer Vision: Transfer learning, CNN architecture, explainable AI (Grad-CAM)</li>
                                            <li>Reinforcement Learning: DRL algorithms (PPO, SAC, DQN), MCTS, reward engineering</li>
                                            <li>MLOps: Experiment tracking (MLFlow), version control (DVC), model deployment (Docker, FastAPI)</li>
                                            <li>Database Systems: PostgreSQL, MongoDB, Neo4J, data warehousing, ETL pipelines</li>
                                        </ul>
                                    </div>

                                    <h2>TECHNISCHE FÄHIGKEITEN / TECHNICAL SKILLS</h2>
                                    <div className="skills-grid">
                                        <div className="skill-item"><strong>Languages:</strong> Python, Java, C++, SQL</div>
                                        <div className="skill-item"><strong>ML/AI:</strong> PyTorch, TensorFlow, Stable Baselines3</div>
                                        <div className="skill-item"><strong>MLOps:</strong> MLFlow, DVC, TensorBoard, Docker</div>
                                        <div className="skill-item"><strong>Big Data:</strong> PySpark, ETL Pipelines</div>
                                        <div className="skill-item"><strong>Web:</strong> Spring Boot, React, FastAPI</div>
                                    </div>

                                    <h2>PROJEKTERFAHRUNG / PROJECT EXPERIENCE</h2>

                                    <div className="project-item">
                                        <h3>BanditGames - AI-Powered Gaming Platform</h3>
                                        <div className="meta">Full-Stack Development & MLOps | 8-Person Team Project | 2025</div>
                                        <ul>
                                            <li>Collaborated on production-scale gaming platform integrating 8+ AI/ML components with full-stack architecture (Spring Boot, React, PostgreSQL, RabbitMQ)</li>
                                            <li>Implemented MCTS-based AI opponent system with 3 difficulty levels and dynamic adjustment based on player performance, processing 10K+ game states</li>
                                            <li>Built end-to-end MLOps pipeline using MLFlow for experiment tracking, DVC for dataset versioning (5K+ games), and Docker for containerized deployment</li>
                                            <li>Developed policy imitation model achieving 87% move prediction accuracy and win probability predictor with 92% confidence on test set</li>
                                            <li>Designed and deployed RAG-powered chatbot with caching for game rules and platform guidance, reducing support queries by 40%</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Deep Reinforcement Learning System</h3>
                                        <div className="meta">Advanced RL | 2-Person Team Project | 2025</div>
                                        <ul>
                                            <li>Implemented and compared DRL algorithms (PPO, SAC, DQN) using Stable Baselines3 on custom Gymnasium environment</li>
                                            <li>Designed custom reward function achieving 40% faster convergence and 25% higher average return compared to baseline across 15+ training runs</li>
                                            <li>Conducted systematic hyperparameter tuning (learning rate, gamma, entropy coefficient) with comprehensive performance analysis</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Computer Vision Transfer Learning System</h3>
                                        <div className="meta">Deep Learning & Explainable AI | 3-Person Team Project | 2025</div>
                                        <ul>
                                            <li>Fine-tuned EfficientNet achieving 92% accuracy on custom image classification dataset, outperforming CNN built from scratch by 15%</li>
                                            <li>Implemented Grad-CAM visualization revealing model decision patterns and conducting error analysis on misclassified samples</li>
                                            <li>Performed systematic hyperparameter optimization (learning rate, batch size) with TensorBoard logging across 5-15 epoch training cycles</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Shared Bicycles Analytics Platform</h3>
                                        <div className="meta">NoSQL & Data Warehouse | University Project | 2024</div>
                                        <ul>
                                            <li>Deployed sharded MongoDB cluster with replication handling 100K+ ride records achieving 99.9% uptime</li>
                                            <li>Designed Neo4J graph database analyzing connectivity patterns across 50+ neighborhood stations</li>
                                            <li>Built star schema data warehouse supporting sub-second business intelligence queries</li>
                                        </ul>
                                    </div>

                                    <h2>SPRACHKENNTNISSE / LANGUAGES</h2>
                                    <p><strong>English:</strong> Native/Fluent<br/>
                                        <strong>Dutch:</strong> Basic (A2)</p>

                                    <div className="signature">
                                        <div className="signature-line">
                                            Antwerpen, {currentDate}<br/>
                                            <em>Kingsley Ahams</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ================= NETHERLANDS ================= */}
                    {activeTab === 'netherlands' && (
                        <div className="resume-content">
                            <div className="resume-header-bar">
                                <div>
                                    <h2 style={{ margin: 0, textShadow: 'none', color: 'white', border: 'none' }}>Dutch CV</h2>
                                    <p style={{ opacity: 0.9, marginTop: '5px' }}>Direct, Concise, Team-Oriented</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => downloadPDF('netherlands-resume', 'Kingsley_Ahams_CV_NL.pdf')}
                                        disabled={isGenerating}
                                        className="px-4 py-2 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100 transition disabled:opacity-50 text-sm"
                                    >
                                        {isGenerating ? 'Generating...' : 'Download PDF ⬇️'}
                                    </button>
                                    <span className="country-flag">🇳🇱</span>
                                </div>
                            </div>

                            <div className="resume-preview">
                                <div id="netherlands-resume" className="resume-paper">
                                    <div style={{ textAlign: 'center', borderBottom: '2px solid #667eea', paddingBottom: '15px', marginBottom: '20px' }}>
                                        <h1 style={{textAlign: 'center'}}>KINGSLEY AHAMS</h1>
                                        <div className="contact-details">
                                            Antwerp, Belgium | +32 465 78 75 55 | kingley.ahams@student.kdg.be<br/>
                                            LinkedIn: linkedin.com/in/kingsley-ahams | GitHub: github.com/Ahams-K
                                        </div>
                                    </div>

                                    <h2>PROFESSIONAL SUMMARY</h2>
                                    <p>Applied Computer Science student with practical experience building production-ready AI/ML systems. Skilled in MLOps (MLFlow, DVC, Docker), deep learning (PyTorch, transfer learning), and full-stack development (Spring Boot, React, PostgreSQL). Proven ability to deliver technical projects in collaborative team environments, from data pipeline design to deployed model APIs.</p>

                                    <h2>EDUCATION</h2>
                                    <div className="education-item">
                                        <h3>BSc Applied Computer Science</h3>
                                        <div className="meta">Karel de Grote University College, Antwerp | Expected 2026</div>
                                        <strong>Focus:</strong> Machine Learning, Data Engineering, Software Development
                                    </div>

                                    <h2>TECHNICAL SKILLS</h2>
                                    <div className="skills-grid">
                                        <div className="skill-item">Python, Java, C++, SQL</div>
                                        <div className="skill-item">PyTorch, TensorFlow, Stable Baselines3</div>
                                        <div className="skill-item">MLFlow, DVC, Docker, CI/CD</div>
                                        <div className="skill-item">Spring Boot, React, FastAPI</div>
                                    </div>

                                    <h2>PROJECT EXPERIENCE</h2>

                                    <div className="project-item">
                                        <h3>BanditGames - AI Gaming Platform</h3>
                                        <div className="meta">8-Person Team | Full-Stack & MLOps | 2025</div>
                                        <ul>
                                            <li>Built production-scale platform integrating Spring Boot backend, React frontend, and PostgreSQL with 8+ AI components</li>
                                            <li>Implemented MCTS-based AI system with 3 difficulty levels processing 10K+ game states</li>
                                            <li>Developed complete MLOps pipeline: MLFlow tracking, DVC versioning (5K+ games), Docker deployment, FastAPI serving</li>
                                            <li>Created policy imitation model (87% accuracy) and win probability predictor (92% confidence) from gameplay data</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Deep Reinforcement Learning System</h3>
                                        <div className="meta">2-Person Team | Advanced RL | 2025</div>
                                        <ul>
                                            <li>Trained and compared DRL algorithms (PPO, SAC, DQN) using Stable Baselines3 on Gymnasium environment</li>
                                            <li>Engineered custom reward achieving 40% faster convergence, validated across 15 training runs with statistical analysis</li>
                                            <li>Performed systematic hyperparameter tuning with comprehensive TensorBoard logging and performance visualization</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Data Engineering Projects</h3>
                                        <div className="meta">University Projects | 2024</div>
                                        <ul>
                                            <li><strong>Shared Bicycles Platform:</strong> Deployed sharded MongoDB cluster (100K+ records), Neo4J graph database, star schema warehouse</li>
                                            <li><strong>Vehicle ETL Pipeline:</strong> Built PySpark pipeline processing 500K+ records, reducing processing time by 80%</li>
                                        </ul>
                                    </div>

                                    <h2>LANGUAGES</h2>
                                    <p><strong>English:</strong> Native/Fluent | <strong>Dutch:</strong> Basic (A2)</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ================= CANADA ================= */}
                    {activeTab === 'canada' && (
                        <div className="resume-content">
                            <div className="resume-header-bar">
                                <div>
                                    <h2 style={{ margin: 0, textShadow: 'none', color: 'white', border: 'none' }}>Canadian Resume</h2>
                                    <p style={{ opacity: 0.9, marginTop: '5px' }}><strong>Strictly No Personal Details</strong> (Anti-Discrimination)</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => downloadPDF('canada-resume', 'Kingsley_Ahams_Resume_Canada.pdf')}
                                        disabled={isGenerating}
                                        className="px-4 py-2 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100 transition disabled:opacity-50 text-sm"
                                    >
                                        {isGenerating ? 'Generating...' : 'Download PDF ⬇️'}
                                    </button>
                                    <span className="country-flag">🇨🇦</span>
                                </div>
                            </div>

                            <div className="resume-preview">
                                <div id="canada-resume" className="resume-paper">
                                    <div style={{ textAlign: 'center', borderBottom: '3px solid #667eea', paddingBottom: '12px', marginBottom: '20px' }}>
                                        <h1 style={{textAlign: 'center'}}>KINGSLEY AHAMS</h1>
                                        <div className="contact-details">
                                            Antwerp, Belgium | +32 465 78 75 55 | kingley.ahams@student.kdg.be<br/>
                                            LinkedIn: linkedin.com/in/kingsley-ahams | GitHub: github.com/Ahams-K
                                        </div>
                                    </div>

                                    <h2>PROFESSIONAL SUMMARY</h2>
                                    <p>Applied Computer Science student with hands-on experience building production-ready AI/ML systems and scalable data infrastructure. Skilled in MLOps practices (MLFlow, DVC, Docker), deep learning (PyTorch, transfer learning, RL), and full-stack development (Spring Boot, React, PostgreSQL). Proven track record delivering complex technical projects in collaborative team environments.</p>

                                    <h2>TECHNICAL SKILLS</h2>
                                    <div className="skills-grid">
                                        <div className="skill-item"><strong>Languages:</strong> Python, Java, C++, SQL</div>
                                        <div className="skill-item"><strong>AI/ML:</strong> PyTorch, TensorFlow, Stable Baselines3, Scikit-learn</div>
                                        <div className="skill-item"><strong>MLOps:</strong> MLFlow, DVC, Docker, GitLab CI/CD</div>
                                        <div className="skill-item"><strong>Web:</strong> Spring Boot, React, FastAPI, Next.js</div>
                                    </div>

                                    <h2>EDUCATION</h2>
                                    <div className="education-item">
                                        <h3>Bachelor of Science, Applied Computer Science</h3>
                                        <div className="meta">Karel de Grote University College, Antwerp, Belgium | Expected Graduation: 2026</div>
                                        <strong>Relevant Coursework:</strong> Machine Learning, Reinforcement Learning, MLOps, Big Data Processing, Distributed Systems
                                    </div>

                                    <h2>PROJECT EXPERIENCE</h2>
                                    <div className="project-item">
                                        <h3>BanditGames - AI-Powered Gaming Platform</h3>
                                        <div className="meta">8-Person Collaborative Team Project | 2025</div>
                                        <ul>
                                            <li>Architected and deployed production-scale gaming platform integrating Spring Boot microservices, React frontend, and PostgreSQL database.</li>
                                            <li>Implemented MCTS-based AI opponent system with 3 skill levels dynamically adjusting to player performance, processing 10K+ game states.</li>
                                            <li>Built end-to-end MLOps pipeline leveraging MLFlow for experiment tracking (50+ experiments), DVC for dataset versioning, and Docker for containerized deployment achieving 99.5% uptime.</li>
                                            <li>Developed and deployed policy imitation model achieving 87% move prediction accuracy via FastAPI.</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Deep Reinforcement Learning System</h3>
                                        <div className="meta">2-Person Team Project | 2025</div>
                                        <ul>
                                            <li>Implemented and benchmarked 3 DRL algorithms (PPO, SAC, DQN) using Stable Baselines3 on custom Gymnasium environment.</li>
                                            <li>Engineered custom reward function achieving 40% faster convergence and 25% higher average episode return compared to baseline.</li>
                                            <li>Performed systematic hyperparameter optimization across 9 configurations, improving sample efficiency by 30%.</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Computer Vision Transfer Learning System</h3>
                                        <div className="meta">3-Person Team Project | 2025</div>
                                        <ul>
                                            <li>Fine-tuned EfficientNet on custom image classification dataset achieving 92% accuracy, outperforming CNN built from scratch by 15%.</li>
                                            <li>Implemented Grad-CAM visualization toolkit to reveal model attention patterns and conducted error analysis.</li>
                                            <li>Optimized hyperparameters (learning rate, batch size) through systematic grid search with TensorBoard tracking.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ================= SPAIN ================= */}
                    {activeTab === 'spain' && (
                        <div className="resume-content">
                            <div className="resume-header-bar">
                                <div>
                                    <h2 style={{ margin: 0, textShadow: 'none', color: 'white', border: 'none' }}>Spanish CV</h2>
                                    <p style={{ opacity: 0.9, marginTop: '5px' }}>Currículum Vitae</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => downloadPDF('spain-resume', 'Kingsley_Ahams_CV_ES.pdf')}
                                        disabled={isGenerating}
                                        className="px-4 py-2 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100 transition disabled:opacity-50 text-sm"
                                    >
                                        {isGenerating ? 'Generating...' : 'Download PDF ⬇️'}
                                    </button>
                                    <span className="country-flag">🇪🇸</span>
                                </div>
                            </div>
                            <div className="resume-preview">
                                <div id="spain-resume" className="resume-paper">
                                    <div className="profile-section">
                                        <div className="photo-placeholder">[Foto]</div>
                                        <div className="contact-info">
                                            <h1>KINGSLEY AHAMS</h1>
                                            <div className="contact-details">
                                                <strong>Datos Personales</strong><br/>
                                                Fecha de nacimiento: 19/05/2005<br/>
                                                Nacionalidad: Nigeriana<br/>
                                                Ubicación: Amberes, Bélgica<br/>
                                                Teléfono: +32 465 78 75 55<br/>
                                                Email: kingley.ahams@student.kdg.be
                                            </div>
                                        </div>
                                    </div>
                                    <h2>PERFIL PROFESIONAL</h2>
                                    <p>Estudiante de Informática Aplicada especializado en sistemas AI/ML, ingeniería de datos y desarrollo full-stack. Experiencia en la construcción de pipelines de machine learning listos para producción con mejores prácticas de MLOps (MLFlow, DVC, Docker).</p>

                                    <h2>HABILIDADES TÉCNICAS</h2>
                                    <div className="skills-grid">
                                        <div className="skill-item"><strong>Lenguajes:</strong> Python, Java, C++, SQL</div>
                                        <div className="skill-item"><strong>Frameworks:</strong> Spring Boot, React, FastAPI</div>
                                        <div className="skill-item"><strong>IA/ML:</strong> PyTorch, TensorFlow, Stable Baselines3</div>
                                    </div>

                                    <h2>EXPERIENCIA DE PROYECTOS</h2>
                                    <div className="project-item">
                                        <h3>BanditGames - Plataforma de Gaming con IA</h3>
                                        <div className="meta">Proyecto en equipo de 8 personas | 2025</div>
                                        <ul>
                                            <li>Colaboración en plataforma de gaming a escala de producción integrando backend Spring Boot, frontend React y PostgreSQL.</li>
                                            <li>Implementación de sistema de oponente IA basado en MCTS con 3 niveles de dificultad.</li>
                                            <li>Desarrollo de pipeline MLOps completo: seguimiento con MLFlow, versionado con DVC y despliegue con Docker.</li>
                                        </ul>
                                    </div>

                                    <div className="project-item">
                                        <h3>Sistema de Aprendizaje por Refuerzo Profundo</h3>
                                        <div className="meta">Proyecto en equipo de 2 personas | 2025</div>
                                        <ul>
                                            <li>Implementación y comparación de algoritmos DRL (PPO, SAC, DQN) usando Stable Baselines3.</li>
                                            <li>Diseño de función de recompensa personalizada logrando 40% convergencia más rápida.</li>
                                        </ul>
                                    </div>

                                    <h2>IDIOMAS</h2>
                                    <p><strong>Inglés:</strong> Fluido (C2)<br/>
                                        <strong>Holandés:</strong> Básico (A2)</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}