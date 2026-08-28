import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faJava, faHtml5, faPhp, faJs } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft, faTerminal, faBolt } from "@fortawesome/free-solid-svg-icons";

function Languages() {
    const navigate = useNavigate();

    const languages = [
        {
            name: "HTML5 / Modern CSS3 / JavaScript",
            level: 95,
            gradient: "from-cyan-400 to-blue-500",
            glow: "rgba(0, 240, 255, 0.8)",
            tier: "CORE // 95%",
            icon: faJs,
        },
        {
            name: "Python (AI / Machine Learning / Back-End)",
            level: 80,
            gradient: "from-yellow-400 to-amber-500",
            glow: "rgba(250, 204, 21, 0.8)",
            tier: "ADVANCED // 80%",
            icon: faPython,
        },
        {
            name: "Java (OOP / Enterprise & Algorithms)",
            level: 65,
            gradient: "from-orange-400 to-red-500",
            glow: "rgba(249, 115, 22, 0.8)",
            tier: "PROFICIENT // 65%",
            icon: faJava,
        },
        {
            name: "PHP (Full-Stack / Legacy & Modern)",
            level: 60,
            gradient: "from-purple-400 to-indigo-500",
            glow: "rgba(168, 85, 247, 0.8)",
            tier: "PROFICIENT // 60%",
            icon: faPhp,
        },
        {
            name: "TypeScript (Type-Safe Engineering)",
            level: 45,
            gradient: "from-sky-400 to-cyan-500",
            glow: "rgba(56, 189, 248, 0.8)",
            tier: "INTERMEDIATE // 45%",
            icon: faTerminal,
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 md:pt-8 pb-12">
            <Sidebar />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 ml-0 md:ml-20 lg:ml-28 z-10">
                <div className="hud-box p-6 md:p-10 relative">
                    
                    {/* HUD Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-8">
                        <div className="flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                            <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider">
                                SKILL_MATRIX // PROGRAMMING_LANGUAGES.DAT
                            </span>
                        </div>
                        <div className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded border border-cyan-500/20">
                            COMPETENCY MATRIX: ACTIVE
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        {/* Left Side: Skill Power Meters */}
                        <div className="w-full lg:w-3/5 text-left space-y-6">
                            <div>
                                <h1 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-2">
                                    CORE <span className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-fuchsia-400 bg-clip-text text-transparent">LANGUAGES</span>
                                </h1>
                                <p className="font-space text-slate-300 text-sm md:text-base">
                                    Synthesizing high-level logic, algorithms, and real-time computation through multi-paradigm programming languages.
                                </p>
                            </div>

                            {/* Power Level Bars */}
                            <div className="space-y-4">
                                {languages.map((lang, index) => (
                                    <div key={index} className="cyber-glass p-3.5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={lang.icon} className="text-cyan-400 text-sm" />
                                                <span className="font-space font-semibold text-sm sm:text-base text-slate-100">
                                                    {lang.name}
                                                </span>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                                                {lang.tier}
                                            </span>
                                        </div>

                                        {/* Energy Gauge Bar */}
                                        <div className="w-full bg-slate-950/80 rounded-full h-2.5 p-0.5 border border-slate-800">
                                            <div
                                                className={`h-full rounded-full bg-gradient-to-r ${lang.gradient} transition-all duration-1000`}
                                                style={{
                                                    width: `${lang.level}%`,
                                                    boxShadow: `0 0 12px ${lang.glow}`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Action Navigation */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <button
                                    className="btn-language btn-language-secondary"
                                    onClick={() => navigate('/about')}
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        ABOUT
                                    </span>
                                </button>

                                <button
                                    className="btn-language"
                                    onClick={() => navigate('/frameworks')}
                                >
                                    <span>
                                        FRAMEWORKS
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Holographic Quantum 3D Cube */}
                        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
                            <div className="mb-4 font-mono text-xs text-cyan-400/80 tracking-widest uppercase flex items-center gap-2">
                                <FontAwesomeIcon icon={faBolt} className="text-yellow-400 animate-pulse" />
                                3D QUANTUM DATA CORE
                            </div>

                            <div className="stage-cube-cont">
                                <div className="cubespinner">
                                    <div className="face1">
                                        <FontAwesomeIcon icon={faPhp} color="#8a2be2" />
                                    </div>
                                    <div className="face2">
                                        <FontAwesomeIcon icon={faHtml5} color="#00f0ff" />
                                    </div>
                                    <div className="face3">
                                        <FontAwesomeIcon icon={faCss3} color="#38bdf8" />
                                    </div>
                                    <div className="face4">
                                        <FontAwesomeIcon icon={faJs} color="#ffd700" />
                                    </div>
                                    <div className="face5">
                                        <FontAwesomeIcon icon={faPython} color="#39ff14" />
                                    </div>
                                    <div className="face6">
                                        <FontAwesomeIcon icon={faJava} color="#ff5722" />
                                    </div>
                                </div>
                            </div>

                            <p className="font-mono text-xs text-slate-400 text-center mt-2">
                                [ HOVER CUBE TO ENGAGE QUANTUM LOCK ]
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Languages;
