import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSatelliteDish, faMapMarkerAlt, faHome, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const navigate = useNavigate();

    const commChannels = [
        {
            name: "LinkedIn",
            tag: "CH-01 // PROFESSIONAL",
            desc: "Connect for enterprise software engineering, AI collaborations & career opportunities.",
            url: "https://www.linkedin.com/in/gurmit-singh-98b987201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: faLinkedin,
            color: "text-blue-400",
            borderGlow: "hover:border-blue-400/80 hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]",
            btnColor: "bg-blue-950/60 border-blue-500/40 text-blue-300 hover:bg-blue-900/60",
        },
        {
            name: "GitHub",
            tag: "CH-02 // CODEBASE",
            desc: "Explore production repositories, AI models, open-source projects & full-stack code.",
            url: "https://github.com/Gurmit147",
            icon: faGithub,
            color: "text-cyan-400",
            borderGlow: "hover:border-cyan-400/80 hover:shadow-[0_0_25px_rgba(0,240,255,0.35)]",
            btnColor: "bg-cyan-950/60 border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60",
        },
        {
            name: "Instagram",
            tag: "CH-03 // SOCIAL & UPDATES",
            desc: "Follow development highlights, tech events, and daily engineering milestones.",
            url: "https://www.instagram.com/gurmit_singh_03/#",
            icon: faInstagram,
            color: "text-fuchsia-400",
            borderGlow: "hover:border-fuchsia-400/80 hover:shadow-[0_0_25px_rgba(232,121,249,0.35)]",
            btnColor: "bg-fuchsia-950/60 border-fuchsia-500/40 text-fuchsia-300 hover:bg-fuchsia-900/60",
        },
        {
            name: "Facebook",
            tag: "CH-04 // COMMUNITY",
            desc: "Stay connected across broader community networks and digital initiatives.",
            url: "https://www.facebook.com/profile.php?id=100070569559151",
            icon: faFacebook,
            color: "text-indigo-400",
            borderGlow: "hover:border-indigo-400/80 hover:shadow-[0_0_25px_rgba(129,140,248,0.35)]",
            btnColor: "bg-indigo-950/60 border-indigo-500/40 text-indigo-300 hover:bg-indigo-900/60",
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
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                            <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider">
                                COMMS_UPLINK // TRANSMISSION_HUB.NET
                            </span>
                        </div>
                        <div className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded border border-emerald-500/30 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            CHANNELS OPEN FOR TRANSMISSION
                        </div>
                    </div>

                    <div className="text-left space-y-8">
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-2">
                                INITIALIZE <span className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-fuchsia-400 bg-clip-text text-transparent">CONTACT</span>
                            </h1>
                            <p className="font-space text-slate-300 text-sm md:text-base max-w-2xl">
                                Direct transmission channels for software engineering roles, technical advisory, research opportunities, or project collaborations.
                            </p>
                        </div>

                        {/* Transmission Channels Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {commChannels.map((ch, index) => (
                                <div
                                    key={index}
                                    className={`cyber-glass rounded-xl p-5 border border-cyan-500/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${ch.borderGlow}`}
                                >
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="font-mono text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                                                {ch.tag}
                                            </span>
                                            <FontAwesomeIcon icon={ch.icon} className={`${ch.color} text-2xl group-hover:scale-110 transition-transform`} />
                                        </div>

                                        <div>
                                            <h3 className="font-orbitron font-bold text-lg text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                                                {ch.name}
                                            </h3>
                                            <p className="font-space text-xs text-slate-400 leading-relaxed">
                                                {ch.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-5">
                                        <a
                                            href={ch.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full py-2.5 px-4 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${ch.btnColor}`}
                                        >
                                            <span>CONNECT</span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Location & Quick Info Bar */}
                        <div className="cyber-glass rounded-xl p-4 border border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400" />
                                <span>LOCATION: PENANG, MALAYSIA // GLOBAL REMOTE AVAILABLE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faSatelliteDish} className="text-yellow-400" />
                                <span>TIMEZONE: UTC+08:00 (MYT)</span>
                            </div>
                        </div>

                        {/* Action Navigation */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button
                                className="btn-language btn-language-secondary"
                                onClick={() => navigate('/awards')}
                            >
                                <span>
                                    AWARDS & HONORS
                                </span>
                            </button>

                            <button
                                className="btn-language"
                                onClick={() => navigate('/')}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faHome} />
                                    RETURN TO BASE
                                </span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
