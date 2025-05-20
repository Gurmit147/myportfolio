import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div className="min-h-screen text-white">
            <Sidebar />
            
            <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-4xl sm:text-5xl text-[#e0d731] font-bold mb-10 text-center md:text-left">
                    Get In Touch
                </h1>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 w-full">
                    {/* Facebook Card */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 w-64 text-center hover:cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="text-white text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                        <p className="text-gray-200 mb-4">Stay connected with us on Facebook.</p>
                        <a
                            href="https://www.facebook.com/profile.php?id=100070569559151"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            Visit Facebook
                        </a>
                    </div>

                    {/* Instagram Card */}
                    <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 w-64 text-center hover:cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} className="text-white text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                        <p className="text-gray-200 mb-4">Follow us on Instagram for the latest updates.</p>
                        <a
                            href="https://www.instagram.com/gurmit_singh_03/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            Visit Instagram
                        </a>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 w-64 text-center hover:cursor-pointer
                    ">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                        <p className="text-gray-200 mb-4">Connect with us professionally on LinkedIn.</p>
                        <a
                            href="https://www.linkedin.com/in/gurmit-singh-98b987201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            Visit LinkedIn
                        </a>
                    </div>

                    {/* GitHub Card */}
                    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 w-64 text-center hover:cursor-pointer">
                        <FontAwesomeIcon icon={faGithub} className="text-white text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                        <p className="text-gray-200 mb-4">Explore our projects on GitHub.</p>
                        <a
                            href="https://github.com/Gurmit147"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            Visit GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
