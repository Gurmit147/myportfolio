import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faLaravel, faFlutter, faNodeJs, faAngular, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft, faCubes, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

function Frameworks() {
    const navigate = useNavigate();

    const frameworks = [
        {
            name: "React.js & Modern SPA Ecosystem",
            level: 85,
            gradient: "from-cyan-400 to-blue-600",
            glow: "rgba(0, 240, 255, 0.8)",
            tier: "CORE // 85%",
            icon: faReact,
            desc: "Component architecture, hooks, state management & reactive UI",
        },
        {
            name: "Django & Django REST Framework",
            level: 70,
            gradient: "from-emerald-400 to-teal-600",
            glow: "rgba(52, 211, 153, 0.8)",
            tier: "ADVANCED // 70%",
            icon: faLayerGroup,
            desc: "Secure backend APIs, ORM modeling, auth & AI model pipelines",
        },
        {
            name: "Node.js & Express / REST Architecture",
            level: 65,
            gradient: "from-lime-400 to-green-600",
            glow: "rgba(163, 230, 53, 0.8)",
            tier: "PROFICIENT // 65%",
            icon: faNodeJs,
            desc: "Asynchronous I/O microservices, event-driven web services",
        },
        {
            name: "Laravel & PHP MVC Architecture",
            level: 60,
            gradient: "from-red-400 to-rose-600",
            glow: "rgba(244, 63, 94, 0.8)",
            tier: "PROFICIENT // 60%",
            icon: faLaravel,
            desc: "Full-stack MVC applications, database migrations & blade templating",
        },
        {
            name: "Flutter & Cross-Platform Mobile",
            level: 50,
            gradient: "from-sky-400 to-indigo-500",
            glow: "rgba(56, 189, 248, 0.8)",
            tier: "INTERMEDIATE // 50%",
            icon: faFlutter,
            desc: "Declarative UI rendering, cross-platform mobile prototypes",
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
                            <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 animate-ping"></span>
                            <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider">
                                FRAMEWORK_SYNTHESIS // TECH_STACK.DAT
                            </span>
                        </div>
                        <div className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded border border-cyan-500/20">
                            DEPLOYMENT READINESS: OPTIMAL
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        {/* Left Side: Framework Power Gauges */}
                        <div className="w-full lg:w-3/5 text-left space-y-6">
                            <div>
                                <h1 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-2">
                                    DEV <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent">FRAMEWORKS</span>
                                </h1>
                                <p className="font-space text-slate-300 text-sm md:text-base">
                                    Architecting modern reactive client-side experiences and high-throughput backend services.
                                </p>
                            </div>

                            {/* Power Level Bars */}
                            <div className="space-y-4">
                                {frameworks.map((fw, index) => (
                                    <div key={index} className="cyber-glass p-3.5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={fw.icon} className="text-cyan-400 text-sm" />
                                                <span className="font-space font-semibold text-sm sm:text-base text-slate-100">
                                                    {fw.name}
                                                </span>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-fuchsia-300 bg-fuchsia-950/80 px-2 py-0.5 rounded border border-fuchsia-500/30">
                                                {fw.tier}
                                            </span>
                                        </div>

                                        <p className="font-mono text-[11px] text-slate-400 mb-2">{fw.desc}</p>

                                        {/* Energy Gauge Bar */}
                                        <div className="w-full bg-slate-950/80 rounded-full h-2.5 p-0.5 border border-slate-800">
                                            <div
                                                className={`h-full rounded-full bg-gradient-to-r ${fw.gradient} transition-all duration-1000`}
                                                style={{
                                                    width: `${fw.level}%`,
                                                    boxShadow: `0 0 12px ${fw.glow}`,
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
                                    onClick={() => navigate('/languages')}
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        LANGUAGES
                                    </span>
                                </button>

                                <button
                                    className="btn-language"
                                    onClick={() => navigate('/work')}
                                >
                                    <span>
                                        WORK MISSIONS
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Holographic Quantum Framework Cube */}
                        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
                            <div className="mb-4 font-mono text-xs text-fuchsia-400/80 tracking-widest uppercase flex items-center gap-2">
                                <FontAwesomeIcon icon={faCubes} className="text-fuchsia-400 animate-pulse" />
                                3D FRAMEWORK HOLOGRID
                            </div>

                            <div className="stage-cube-cont">
                                <div className="cubespinner">
                                    <div className="face1">
                                        <FontAwesomeIcon icon={faReact} color="#00f0ff" />
                                    </div>
                                    <div className="face2">
                                        <FontAwesomeIcon icon={faLaravel} color="#f43f5e" />
                                    </div>
                                    <div className="face3">
                                        <FontAwesomeIcon icon={faFlutter} color="#38bdf8" />
                                    </div>
                                    <div className="face4">
                                        <FontAwesomeIcon icon={faNodeJs} color="#39ff14" />
                                    </div>
                                    <div className="face5">
                                        <FontAwesomeIcon icon={faAngular} color="#ef4444" />
                                    </div>
                                    <div className="face6">
                                        <FontAwesomeIcon icon={faVuejs} color="#10b981" />
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

export default Frameworks;
