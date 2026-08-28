import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faEnvelope, faTerminal, faBrain } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16 md:pt-0">
            <Sidebar />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 ml-0 md:ml-20 lg:ml-28 z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    
                    {/* Left Cyber Hero Content */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
                        
                        {/* Futuristic Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            <span className="font-semibold tracking-wider">[ SYSTEM ONLINE // READY FOR HIRE ]</span>
                        </div>

                        {/* Title & Name */}
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl font-mono text-cyan-400 tracking-widest uppercase">
                                Initializing Dossier...
                            </p>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-orbitron font-black tracking-tight text-white">
                                I'M <span className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">GURMIT</span>
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-semibold text-slate-300 tracking-wider">
                                AI & Full-Stack Software Engineer
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-base sm:text-lg font-space leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Pioneering intelligent software solutions with expertise in <span className="text-cyan-400 font-semibold">AI Neural Networks</span>, <span className="text-yellow-300 font-semibold">Full-Stack Web Systems</span>, and <span className="text-fuchsia-400 font-semibold">Real-Time Cloud Architectures</span>. Awarded Gold at international research summits.
                        </p>

                        {/* Tech Stats HUD Grid */}
                        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 py-2">
                            <div className="cyber-glass p-3 rounded-lg border border-cyan-500/30 text-center">
                                <div className="text-cyan-400 font-orbitron font-bold text-lg sm:text-xl">3.94</div>
                                <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">CGPA Score</div>
                            </div>
                            <div className="cyber-glass p-3 rounded-lg border border-fuchsia-500/30 text-center">
                                <div className="text-fuchsia-400 font-orbitron font-bold text-lg sm:text-xl">GOLD</div>
                                <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">iDRIVE Award</div>
                            </div>
                            <div className="cyber-glass p-3 rounded-lg border border-yellow-500/30 text-center">
                                <div className="text-yellow-300 font-orbitron font-bold text-lg sm:text-xl">10+</div>
                                <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">Awards & Projs</div>
                            </div>
                        </div>

                        {/* Cyber Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                            <button
                                className="btn-language group"
                                onClick={() => navigate('/work')}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faRocket} className="mr-2 group-hover:rotate-12 transition-transform" />
                                    EXPLORE WORK
                                </span>
                            </button>

                            <button
                                className="btn-language btn-language-secondary"
                                onClick={() => navigate('/about')}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faTerminal} className="mr-2" />
                                    VIEW ABOUT
                                </span>
                            </button>

                            <button
                                className="px-5 py-3 rounded-md font-mono text-xs sm:text-sm text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/30 hover:bg-cyan-900/50 transition-all flex items-center gap-2"
                                onClick={() => navigate('/contact')}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                                TRANSMIT MSG
                            </button>
                        </div>
                    </div>

                    {/* Right Cyber Hologram Card & Avatar */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center relative">
                        {/* Glowing Background Ring */}
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-fuchsia-500/20 blur-3xl -z-10 animate-pulse"></div>

                        <div className="relative group max-w-xs sm:max-w-sm">
                            {/* HUD Frame Borders */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400 z-20"></div>
                            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400 z-20"></div>
                            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400 z-20"></div>
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400 z-20"></div>

                            {/* Main Avatar Frame */}
                            <div className="cyber-glass rounded-2xl p-4 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.25)] relative overflow-hidden">
                                <div className="relative z-10 rounded-xl overflow-hidden bg-slate-950/80">
                                    <img
                                        src="images/developer.png"
                                        alt="Gurmit Developer Avatar"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Scanline overlay on image */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-blue-950/40 pointer-events-none"></div>
                                </div>

                                {/* Floating HUD Tag */}
                                <div className="mt-3 flex items-center justify-between text-xs font-mono text-cyan-300 px-1">
                                    <span className="flex items-center gap-1.5">
                                        <FontAwesomeIcon icon={faBrain} className="text-fuchsia-400" />
                                        NEURAL DEV
                                    </span>
                                    <span className="text-slate-400">ID: GS-2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Homepage;
