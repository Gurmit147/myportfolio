import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FaMedal, FaStar, FaGraduationCap, FaTrophy, FaClipboardList } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExpand, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Awards() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const achievements = [
        {
            icon: <FaMedal className="text-yellow-400 text-xl" />,
            title: "Gold Award at iDRIVE Competition",
            category: "INTERNATIONAL GOLD",
            badgeColor: "border-yellow-400/60 bg-yellow-950/60 text-yellow-300",
            description: "Achieved the Gold Award at the International Development, Research & Innovation (iDRIVE) Competition hosted by UTHM, featuring international competitors from Indonesia, Thailand, the Philippines, and India.",
            image: "/images/idrive.jpeg",
        },
        {
            icon: <FaTrophy className="text-cyan-400 text-xl" />,
            title: "Anugerah Projek Terbaik (Penyelidikan & Inovasi)",
            category: "BEST PROJECT HONOR",
            badgeColor: "border-cyan-400/60 bg-cyan-950/60 text-cyan-300",
            description: "Recognized by Politeknik Seberang Perai with the Prestigious Best Research & Innovation Project Award during convocation for the E-Koperasi enterprise system.",
            image: "/images/anugerah.jpeg",
        },
        {
            icon: <FaGraduationCap className="text-emerald-400 text-xl" />,
            title: "Academic Excellence // CGPA 3.94",
            category: "TOP ACADEMIC",
            badgeColor: "border-emerald-400/60 bg-emerald-950/60 text-emerald-300",
            description: "Graduated with a stellar CGPA of 3.94 and multiple Anugerah Ketua Jabatan honors across consecutive semesters.",
            image: "/images/academic.jpeg",
        },
        {
            icon: <FaTrophy className="text-amber-500 text-xl" />,
            title: "Bronze Medal at IRISE 2025",
            category: "INTERNATIONAL EXPO",
            badgeColor: "border-amber-500/60 bg-amber-950/60 text-amber-300",
            description: "Awarded Bronze Medal at the International Research & Information Science Expo (IRISE 2025) hosted by UiTM Kelantan.",
            image: "/images/irise.jpg",
        },
        {
            icon: <FaStar className="text-fuchsia-400 text-xl" />,
            title: "WorldSkills Malaysia Belia",
            category: "NATIONAL COMPETITION",
            badgeColor: "border-fuchsia-400/60 bg-fuchsia-950/60 text-fuchsia-300",
            description: "Competed in the prestigious WorldSkills Malaysia Belia national finals, showcasing rapid problem-solving, Laravel web architecture, Vue, and enterprise deployment.",
            image: "/images/worldskills.jpeg",
        },
        {
            icon: <FaStar className="text-blue-400 text-xl" />,
            title: "Pra-WorldSkills Malaysia",
            category: "QUALIFIER FINALIST",
            badgeColor: "border-blue-400/60 bg-blue-950/60 text-blue-300",
            description: "Qualified for Round 2 of the WorldSkills championship series with advanced JavaScript algorithmic implementations.",
            image: "/images/praworldskills.jpeg",
        },
        {
            icon: <FaStar className="text-cyan-400 text-xl" />,
            title: "Data Analysis Hackathon",
            category: "HACKATHON",
            badgeColor: "border-cyan-400/60 bg-cyan-950/60 text-cyan-300",
            description: "Engineered data transformation pipelines, exploratory data analysis, and predictive modeling using Python and Pandas.",
            image: "/images/datahackathon.jpeg",
        },
        {
            icon: <FaClipboardList className="text-purple-400 text-xl" />,
            title: "FIRA Malaysia Cup 2023",
            category: "COMMITTEE & TECH",
            badgeColor: "border-purple-400/60 bg-purple-950/60 text-purple-300",
            description: "Served as an essential organizing committee member (AJK) for the 16th FIRA Robotics Malaysia Cup.",
            image: "/images/fira.jpeg",
        },
        {
            icon: <FaStar className="text-lime-400 text-xl" />,
            title: "Polyskills Competition",
            category: "WEB COMPETITION",
            badgeColor: "border-lime-400/60 bg-lime-950/60 text-lime-300",
            description: "Pioneered foundational competition experience solving real-time frontend and web layout algorithmic challenges.",
            image: "/images/polyskills.jpeg",
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
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping"></span>
                            <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider">
                                HALL_OF_HONOR // AWARDS_AND_RECOGNITION.DAT
                            </span>
                        </div>
                        <div className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded border border-cyan-500/20">
                            TOTAL HONORS VERIFIED: 09
                        </div>
                    </div>

                    <div className="text-left space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-2">
                                AWARDS & <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-cyan-400 bg-clip-text text-transparent">HONORS</span>
                            </h1>
                            <p className="font-space text-slate-300 text-sm md:text-base max-w-3xl">
                                Demonstrated excellence across international research summits, national engineering skills tournaments, and academic performance.
                            </p>
                        </div>

                        {/* Responsive Cyber Award Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[560px] overflow-y-auto pr-2 custom-scroll">
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className="cyber-glass rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                                >
                                    <div>
                                        {/* Image preview with zoom */}
                                        <div
                                            className="relative aspect-video w-full rounded-lg overflow-hidden mb-3 bg-slate-950 cursor-pointer border border-cyan-500/15 group-hover:border-cyan-400/40"
                                            onClick={() => setSelectedImage(item.image)}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 justify-between">
                                                <span className="font-mono text-[10px] text-cyan-300">INSPECT CERTIFICATE</span>
                                                <FontAwesomeIcon icon={faExpand} className="text-cyan-400 text-xs" />
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                                                {item.category}
                                            </span>
                                            {item.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-orbitron font-bold text-sm sm:text-base text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-space text-xs text-slate-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Navigation */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button
                                className="btn-language btn-language-secondary"
                                onClick={() => navigate('/work')}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    WORK MISSIONS
                                </span>
                            </button>

                            <button
                                className="btn-language"
                                onClick={() => navigate('/contact')}
                            >
                                <span>
                                    INITIALIZE CONTACT
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Cyber Inspection Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full cyber-glass-glow rounded-2xl p-4 border border-cyan-400 shadow-[0_0_50px_rgba(0,240,255,0.4)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center pb-3 mb-3 border-b border-cyan-500/30">
                            <span className="font-mono text-xs text-cyan-300 tracking-wider">
                                AWARDS_ARCHIVE // CERTIFICATE_INSPECTION
                            </span>
                            <button
                                className="text-cyan-400 hover:text-white text-xl p-1 font-mono transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <div className="max-h-[75vh] overflow-hidden rounded-lg flex items-center justify-center bg-black/50">
                            <img
                                src={selectedImage}
                                alt="Certificate Inspection"
                                className="max-w-full max-h-[70vh] object-contain rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Awards;
