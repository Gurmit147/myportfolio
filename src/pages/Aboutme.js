import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faMicrochip, faShieldHalved, faCodeBranch, faAtom } from '@fortawesome/free-solid-svg-icons';

function Aboutme() {
    const navigate = useNavigate();

    const techPillars = [
        { icon: faMicrochip, label: 'AI & Vision', desc: 'TensorFlow, CNN, Computer Vision' },
        { icon: faCodeBranch, label: 'Full-Stack Web', desc: 'React, Django, Laravel, Node.js' },
        { icon: faAtom, label: 'Real-Time Apps', desc: 'Firebase, WebSockets, REST APIs' },
        { icon: faShieldHalved, label: 'System Architecture', desc: 'Automation, Scalability, Security' },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 md:pt-8 pb-12">
            <Sidebar />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 ml-0 md:ml-20 lg:ml-28 z-10">
                
                {/* Main Cyber Dossier Card */}
                <div className="hud-box p-6 md:p-10 relative">
                    
                    {/* Top Terminal Status Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                            </div>
                            <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider">
                                SYS.TERMINAL // PROFILE_DOSSIER.LOG
                            </span>
                        </div>
                        <div className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded border border-cyan-500/20">
                            CLEARANCE: LEVEL 4 // AI_DEVELOPER
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        
                        {/* Left Text & Pillars */}
                        <div className="w-full lg:w-3/5 space-y-6 text-left">
                            <div>
                                <h1 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-2">
                                    ABOUT <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">GURMIT</span>
                                </h1>
                                <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">
                                    [ B.Sc (Hons) Information Technology // CGPA 3.94 ]
                                </p>
                            </div>

                            <p className="text-slate-300 font-space text-base md:text-lg leading-relaxed">
                                Hi! I’m Gurmit, a forward-looking Software Engineer with a relentless passion for AI-driven solutions, computer vision neural networks, and scalable full-stack web architectures.
                            </p>

                            <p className="text-slate-300 font-space text-sm md:text-base leading-relaxed">
                                Over the past few years, I have architected and deployed real-time production systems, integrated deep learning pipelines with TensorFlow, and engineered robust industrial monitoring solutions. Through award-winning projects like <span className="text-yellow-300 font-semibold">E-Koperasi</span> and competing in <span className="text-cyan-400 font-semibold">WorldSkills Malaysia Belia</span>, I have mastered building rapid, resilient, and human-centric software.
                            </p>

                            {/* Core Pillars Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {techPillars.map((pillar, index) => (
                                    <div
                                        key={index}
                                        className="cyber-glass p-3.5 rounded-lg border border-cyan-500/25 flex items-start gap-3 hover:border-cyan-400 transition-colors"
                                    >
                                        <div className="p-2 rounded bg-cyan-950/70 text-cyan-400 border border-cyan-500/30 text-lg">
                                            <FontAwesomeIcon icon={pillar.icon} />
                                        </div>
                                        <div>
                                            <h4 className="font-orbitron text-xs font-bold text-slate-100 uppercase tracking-wide">
                                                {pillar.label}
                                            </h4>
                                            <p className="font-mono text-xs text-slate-400 mt-0.5">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button
                                    className="btn-language btn-language-secondary"
                                    onClick={() => navigate('/')}
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        HOME
                                    </span>
                                </button>
                                <button
                                    className="btn-language"
                                    onClick={() => navigate('/contact')}
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        CONTACT
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Cyber Hologram Card */}
                        <div className="w-full lg:w-2/5 flex justify-center items-center">
                            <div className="relative group max-w-xs sm:max-w-sm">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative cyber-glass p-4 rounded-xl border border-cyan-500/40">
                                    <img
                                        src="images/developer.png"
                                        alt="Gurmit Developer"
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                    <div className="mt-4 pt-3 border-t border-cyan-500/20 flex justify-between items-center text-xs font-mono text-cyan-300">
                                        <span>STATUS: ACTIVE</span>
                                        <span className="text-yellow-300">SPECIALIZATION: AI & WEB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Aboutme;
