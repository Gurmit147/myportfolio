import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FaMedal, FaStar, FaGraduationCap, FaTrophy, FaClipboardList } from 'react-icons/fa';

function Awards() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const achievements = [
        {
            icon: <FaStar className="text-yellow-500 text-2xl mr-2" />,
            title: "Data Hackathon",
            description: "Participated in a Data Analysis Hackathon, gaining valuable experience in data analysis and proficiency in libraries like Pandas.",
            image: "/images/datahackathon.jpeg",
        },
        {
            icon: <FaStar className="text-yellow-500 text-2xl mr-2" />,
            title: "WorldSkills Malaysia Belia",
            description: "Competed in the prestigious WorldSkills Malaysia Belia series, showcasing technical and problem-solving skills.",
            image: "/images/worldskills.jpeg",
        },
        {
            icon: <FaClipboardList className="text-yellow-500 text-2xl mr-2" />,
            title: "Academic Excellence",
            description: "Achieved a CGPA of 3.94 and multiple Anugerah Ketua Jabatan honors for outstanding academic performance.",
            image: "/images/academic.jpeg",
        },
        {
            icon: <FaTrophy className="text-yellow-500 text-2xl mr-2" />,
            title: "FIRA Malaysia Cup 2023",
            description: "Served as an AJK for the 16th FIRA Malaysia Cup, contributing to its successful organization.",
            image: "/images/fira.jpeg",
        },
        {
            icon: <FaMedal className="text-yellow-500 text-2xl mr-2" />,
            title: "Gold Award at iDRIVE Competition",
            description: "Achieved the Gold Award at the International Development, Research & Innovation (iDRIVE) Competition hosted by Universiti Tun Hussein Onn Malaysia. The competition featured participants from Indonesia, Thailand, the Philippines, and India.",
            image: "/images/idrive.jpeg",
        },
        {
            icon: <FaTrophy className="text-yellow-500 text-2xl mr-2" />,
            title: "Anugerah Projek Terbaik (Penyelidikan & Inovasi)",
            description: "Recognized by Politeknik Seberang Perai with this prestigious award during the convocation for the E-Koperasi project.",
            image: "/images/anugerah.jpeg",
        },
    ];

    const openPopup = (image) => {
        setSelectedImage(image);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <Sidebar />
            <div className="flex flex-col md:flex-row w-full p-4 md:p-8">
                <div className="text-center md:text-left w-full w3-animate-left">
                <h1 className="text-4xl sm:text-5xl text-[#e0d731] md:text-6xl font-bold mb-6 ml-0 md:ml-32">
                        Awards & Achievements
                    </h1>
                    <section>
                        <div className="max-w-4xl mx-auto px-6">
                            
                            <div className="space-y-6 overflow-y-auto max-h-[600px]">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-4"
                                    >
                                        <div className="w-160 h-48 cursor-pointer" onClick={() => openPopup(achievement.image)}>
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {achievement.icon}
                                            <h2 className="text-lg font-bold text-blue-600">{achievement.title}</h2>
                                        </div>
                                        <p className="text-gray-700 mt-2 text-center">{achievement.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closePopup}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Popup"
                            className="max-w-[90vw] max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Awards;
