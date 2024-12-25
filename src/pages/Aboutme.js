import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';

function Aboutme() {
    const navigate = useNavigate(); // Hook for navigating programmatically

    return (
        <div>
            <Sidebar />
            <div className='intro-content flex flex-col md:flex-row items-center justify-center min-h-screen w-full p-4 md:p-8 ml-0 md:ml-32'>
                <div className='text-center md:text-left md:w-1/2 w-full w3-animate-left'>
                    <h1 className='text-4xl sm:text-5xl text-[#e0d731] md:text-6xl font-bold mb-6'>
                        About Me
                    </h1>
                    <p className="text-sm sm:text-xl font-semibold text-white leading-relaxed drop-shadow-lg">
                        Hi! I’m Gurmit, a Bachelor of Science with Honours (Information Technology) student with a passion for software development, AI-driven solutions, and innovative problem-solving. Over the past few years, I have gained hands-on experience in building real-time web applications, implementing AI for computer vision and neural networks, and developing secure, scalable solutions. 

                        Through award-winning projects like E-Koperasi and participation in competitions such as WorldSkills Malaysia Belia, I’ve honed my skills in React, Django, Firebase, and TensorFlow. I am eager to leverage my expertise in AI and full-stack development to create impactful, cutting-edge solutions in a professional setting.
                    </p>
                    <br></br>
                        <button className='btn-language' onClick={()=>{navigate('/languages')}}>
                        <span>NEXT</span>
                        </button>
                </div>
               
                <div className='md:w-1/2 mt-8 md:mt-0 md:ml-16 w3-animate-zoom'>
                    <img src='images/developer.png' alt='Developer' className='max-w-full h-auto rounded-lg shadow-lg' />
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
