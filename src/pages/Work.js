import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBriefcase, 
    faCalendarAlt, 
    faBuilding, 
    faMicrochip, 
    faCheckCircle, 
    faImages, 
    faExpand, 
    faTimes, 
    faArrowRight, 
    faArrowLeft,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

function Work() {
    const navigate = useNavigate();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deliverables = [
        {
            title: "Pass Over System Customization",
            desc: "Customized production pass-over systems to optimize assembly line workflows and streamline automated machine handoffs.",
            tag: "WORKFLOW AUTOMATION",
        },
        {
            title: "Oven Temperature Telemetry & Monitoring",
            desc: "Engineered web-based real-time telemetry dashboards fetching sensor data to plot live temperature trends, charts, and thermal thresholds.",
            tag: "IOT / DATA VIZ",
        },
        {
            title: "eDowntime Tracking & Analytics",
            desc: "Contributed to the industrial eDowntime telemetry platform, tracking machine uptime vs downtime to optimize operational throughput.",
            tag: "SYSTEM RELIABILITY",
        },
        {
            title: "Digital Machine Inspection Checklist",
            desc: "Built structured digital checklist applications ensuring factory operators adhered to ISO/standardized maintenance protocols.",
            tag: "PROCESS CONTROL",
        },
        {
            title: "Gas Farm Critical Alert Engine",
            desc: "Built a monitoring system where operators logged gas pressure values into the centralized database, triggering automated email warnings upon anomaly detection.",
            tag: "ALERTS / TELEMETRY",
        },
        {
            title: "Real-Time Machine Status Dashboard",
            desc: "Designed unified executive and operational dashboards visualizing live machine state, uptime metrics, and performance indicators.",
            tag: "DASHBOARD ARCHITECTURE",
        },
        {
            title: "Machine Software Debugging & Computer Vision",
            desc: "Resolved complex camera-to-disk frame write failures on DSV inspection machines and executed rigorous system integration testing.",
            tag: "FIRMWARE & DEBUGGING",
        },
    ];

    const galleryImages = [
        { src: 'images/1.jpeg', title: 'Pass Over System Interface', desc: 'Customized operator handoff and workflow orchestration screen.' },
        { src: 'images/2.jpeg', title: 'Oven Temperature Telemetry', desc: 'Real-time thermal sensor charts and threshold monitoring feed.' },
        { src: 'images/3.jpeg', title: 'eDowntime Dashboard View', desc: 'Production line machine efficiency and uptime status graphs.' },
        { src: 'images/4.jpeg', title: 'Machine Digital Checklist', desc: 'Standard operating maintenance checklist for operators.' },
        { src: 'images/5.jpeg', title: 'Gas Farm Monitoring Feed', desc: 'Pressure sensor logging and automated email alert trigger system.' },
        { src: 'images/6.jpeg', title: 'Operational Machine Checklist', desc: 'Equipment verification and quality assurance logging portal.' },
    ];

    const nextImage = () => {
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;
            if (e.key === 'Escape') setIsModalOpen(false);
            if (e.key === 'ArrowRight') setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
            if (e.key === 'ArrowLeft') setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, galleryImages.length]);

    const currentImg = galleryImages[activeImageIndex];

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
                                OPERATION_LOG // WORK_EXPERIENCE.SYS
                            </span>
                        </div>
                        <div className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded border border-cyan-500/20">
                            ROLE: PROGRAMMER // INDUSTRIAL TELEMETRY
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                        
                        {/* Left Side: Work Experience Mission Details */}
                        <div className="w-full lg:w-1/2 space-y-6 text-left">
                            <div>
                                <h1 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-2">
                                    WORK & <span className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-fuchsia-400 bg-clip-text text-transparent">EXPERIENCE</span>
                                </h1>
                                <p className="font-space text-slate-300 text-sm md:text-base">
                                    Operational deployments in high-precision manufacturing, telemetry automation, and real-time monitoring.
                                </p>
                            </div>

                            {/* Job Card */}
                            <div className="cyber-glass p-5 rounded-xl border border-cyan-500/30 space-y-4">
                                <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-800 pb-3">
                                    <div>
                                        <h3 className="font-orbitron text-xl font-bold text-cyan-300 flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBriefcase} className="text-yellow-400 text-base" />
                                            Programmer
                                        </h3>
                                        <div className="flex items-center gap-2 font-mono text-sm text-slate-300 mt-1">
                                            <FontAwesomeIcon icon={faBuilding} className="text-cyan-400" />
                                            Coherent Corp
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        6 MONTHS DURATION
                                    </div>
                                </div>

                                <p className="font-space text-slate-300 text-sm leading-relaxed">
                                    Contributed to critical operational software, telemetry data collection, machine downtime tracking, and sensor monitoring across active fab production equipment.
                                </p>

                                {/* Scrollable Deliverables List */}
                                <div>
                                    <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                                        <FontAwesomeIcon icon={faMicrochip} />
                                        KEY MISSION DELIVERABLES
                                    </h4>
                                    
                                    <div className="space-y-3 max-h-[260px] overflow-y-auto pr-2 custom-scroll">
                                        {deliverables.map((item, index) => (
                                            <div
                                                key={index}
                                                className="p-3 rounded-lg bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                                            >
                                                <div className="flex justify-between items-start gap-2 mb-1">
                                                    <h5 className="font-space font-bold text-sm text-slate-100 flex items-center gap-2">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400 text-xs" />
                                                        {item.title}
                                                    </h5>
                                                    <span className="font-mono text-[10px] text-yellow-400 bg-yellow-950/50 border border-yellow-500/30 px-2 py-0.5 rounded whitespace-nowrap">
                                                        {item.tag}
                                                    </span>
                                                </div>
                                                <p className="font-space text-xs text-slate-400 leading-relaxed pl-5">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                                    onClick={() => navigate('/awards')}
                                >
                                    <span>
                                        AWARDS & HONORS
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Enhanced Interactive Telemetry Screen Viewer */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faImages} />
                                    INTERACTIVE SYSTEM TELEMETRY VIEWER
                                </h3>
                                <span className="font-mono text-[11px] text-yellow-300 bg-yellow-950/60 px-2 py-0.5 rounded border border-yellow-500/30">
                                    FRAME {activeImageIndex + 1} / {galleryImages.length}
                                </span>
                            </div>

                            {/* Main Featured Holographic Screen */}
                            <div className="cyber-glass-glow rounded-2xl p-3 border border-cyan-500/40 relative shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                                
                                {/* Screen Container */}
                                <div 
                                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center group cursor-pointer border border-cyan-500/20"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <img
                                        src={currentImg.src}
                                        alt={currentImg.title}
                                        className="w-full h-full object-contain bg-black/60 transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-black/60 pointer-events-none"></div>

                                    {/* Prev & Next Floating Buttons */}
                                    <button
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/50 flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg z-20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevImage();
                                        }}
                                        title="Previous Image"
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>

                                    <button
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/50 flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg z-20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextImage();
                                        }}
                                        title="Next Image"
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>

                                    {/* Expand icon on hover */}
                                    <div className="absolute top-3 right-3 bg-black/70 hover:bg-cyan-500 text-cyan-300 hover:text-black p-2 rounded-lg border border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center gap-1.5 text-xs font-mono">
                                        <FontAwesomeIcon icon={faExpand} />
                                        <span>FULLSCREEN</span>
                                    </div>
                                </div>

                                {/* Active Image Caption Bar */}
                                <div className="mt-3 p-3 bg-slate-950/80 rounded-xl border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
                                    <div>
                                        <h4 className="font-orbitron font-bold text-sm text-cyan-300">
                                            {currentImg.title}
                                        </h4>
                                        <p className="font-space text-xs text-slate-300 mt-0.5">
                                            {currentImg.desc}
                                        </p>
                                    </div>
                                    <button
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-mono text-xs whitespace-nowrap self-start sm:self-center transition-colors"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <FontAwesomeIcon icon={faExpand} />
                                        ZOOM VIEW
                                    </button>
                                </div>
                            </div>

                            {/* Filmstrip Thumbnail Reel */}
                            <div className="space-y-2">
                                <div className="text-[11px] font-mono text-slate-400 text-left">
                                    SELECT TELEMETRY FRAME:
                                </div>
                                <div className="grid grid-cols-6 gap-2">
                                    {galleryImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`aspect-[4/3] rounded-lg overflow-hidden border relative transition-all duration-200 bg-slate-950 ${
                                                activeImageIndex === idx
                                                    ? 'border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.6)] scale-105 ring-2 ring-cyan-400/40'
                                                    : 'border-cyan-500/25 opacity-60 hover:opacity-100 hover:border-cyan-400/60'
                                            }`}
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <span className="absolute bottom-0.5 right-1 font-mono text-[9px] text-cyan-300 bg-black/80 px-1 rounded">
                                                0{idx + 1}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* High-Tech Fullscreen Inspection Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center z-50 p-4 sm:p-6"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-5xl w-full cyber-glass-glow rounded-2xl p-4 sm:p-6 border border-cyan-400 shadow-[0_0_60px_rgba(0,240,255,0.4)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center pb-3 mb-3 border-b border-cyan-500/30">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                                <span className="font-mono text-xs sm:text-sm text-cyan-300 tracking-wider">
                                    INSPECTION_MODE // {currentImg.title.toUpperCase()}
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="font-mono text-xs text-yellow-300 bg-yellow-950/80 px-2 py-0.5 rounded border border-yellow-500/30">
                                    FRAME {activeImageIndex + 1} / {galleryImages.length}
                                </span>
                                <button
                                    className="text-cyan-400 hover:text-white text-2xl p-1 font-mono transition-colors"
                                    onClick={() => setIsModalOpen(false)}
                                    title="Close Viewer (Esc)"
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Image Display with Navigation Arrows */}
                        <div className="relative max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center bg-slate-950/90 rounded-xl overflow-hidden border border-cyan-500/20 p-2">
                            <img
                                src={currentImg.src}
                                alt={currentImg.title}
                                className="max-w-full max-h-[65vh] sm:max-h-[70vh] object-contain rounded"
                            />

                            {/* Left Nav Button */}
                            <button
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/80 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/60 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] z-30"
                                onClick={prevImage}
                                title="Previous (Left Arrow)"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                            </button>

                            {/* Right Nav Button */}
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/80 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/60 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] z-30"
                                onClick={nextImage}
                                title="Next (Right Arrow)"
                            >
                                <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                            </button>
                        </div>

                        {/* Modal Footer Description & Thumbnail Strip */}
                        <div className="mt-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                            <p className="font-space text-xs sm:text-sm text-slate-300 text-left">
                                <strong className="text-cyan-300 font-orbitron">{currentImg.title}: </strong>
                                {currentImg.desc}
                            </p>

                            <div className="flex gap-1.5 self-center">
                                {galleryImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            activeImageIndex === idx
                                                ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff] scale-125'
                                                : 'bg-slate-700 hover:bg-slate-500'
                                        }`}
                                    ></button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
