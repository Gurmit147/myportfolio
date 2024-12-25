import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faLaravel, faFlutter, faNodeJs, faAngular, faVuejs } from "@fortawesome/free-brands-svg-icons";

function Frameworks() {
    const navigate = useNavigate();

    return (
        <div>
            <Sidebar />
            <div className="intro-content flex flex-col md:flex-row items-center justify-center min-h-screen w-full p-4 md:p-8 ml-0 md:ml-32">
                <div className="text-center md:text-left md:w-1/2 w-full w3-animate-left">
                    <h1 className="text-4xl sm:text-5xl text-[#e0d731] md:text-6xl font-bold mb-6">
                        Frameworks
                    </h1>

                    <div className="mb-6">
                        {/* React */}
                        <div
                            className="language-option mb-3"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="text-sm sm:text-xl font-semibold text-white leading-relaxed">React</div>
                            <div className="w-full bg-gray-300 rounded-full h-3 mb-4 dark:bg-gray-600">
                                <div
                                    className="h-3 rounded-full"
                                    style={{
                                        width: '75%',
                                        background: 'linear-gradient(90deg, #FF4500, #FF6347)',
                                        boxShadow: '0 0 10px rgba(255, 99, 71, 0.8)',
                                        transition: 'width 0.3s ease-in-out',
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* DJango */}
                        <div
                            className="language-option mb-3"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="text-sm sm:text-xl font-semibold text-white leading-relaxed">DJango</div>
                            <div className="w-full bg-gray-300 rounded-full h-3 mb-4 dark:bg-gray-600">
                                <div
                                    className="h-3 rounded-full"
                                    style={{
                                        width: '60%',
                                        background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                                        boxShadow: '0 0 10px rgba(255, 193, 7, 0.8)',
                                        transition: 'width 0.3s ease-in-out',
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Nodejs */}
                        <div
                            className="language-option mb-3"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="text-sm sm:text-xl font-semibold text-white leading-relaxed">Node JS</div>
                            <div className="w-full bg-gray-300 rounded-full h-3 mb-4 dark:bg-gray-600">
                                <div
                                    className="h-3 rounded-full"
                                    style={{
                                        width: '50%',
                                        background: 'linear-gradient(90deg, #FF8C00, #FFA500)',
                                        boxShadow: '0 0 10px rgba(255, 165, 0, 0.8)',
                                        transition: 'width 0.3s ease-in-out',
                                    }}
                                ></div>
                            </div>
                        </div>

                         {/* Laravel */}
                        <div className="language-option mb-3" style={{ cursor: 'pointer' }}>
                            <div className="text-sm sm:text-xl font-semibold text-white leading-relaxed">
                                Laravel
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-3 mb-4 dark:bg-gray-600">
                                <div
                                    className="h-3 rounded-full"
                                    style={{
                                        width: '40%',
                                        background: 'linear-gradient(90deg, #6A0DAD, #9370DB)',
                                        boxShadow: '0 0 10px rgba(147, 112, 219, 0.8)',
                                        transition: 'width 0.3s ease-in-out',
                                    }}
                                ></div>
                            </div>
                        </div>

                        
                    </div>
                    <div className='flex'>
                    <button
                    className='btn-language mr-6'
                    onClick={() =>{navigate('/languages')}}
                    ><span>
                        PREVIOUS
                        </span></button>

                    
                    </div>

                </div>

                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16 w3-animate-zoom">
                
                <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faReact} color="#4705a3" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faLaravel} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faFlutter} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faNodeJs} color="#acb502" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faAngular} color="#FFD700" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faVuejs} color="#EC4D28" />
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    );
}

export default Frameworks;
