import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';

function Homepage() {
    return (
        <div>
            <Sidebar />
            <div className='intro-content flex flex-col md:flex-row items-center justify-center h-screen w-[90%] p-8 ml-0 md:ml-32'>
            <div className='text-center md:text-left md:w-1/2 w3-animate-left'>            
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 text-[#e0d731]'>Hi,</h1>
                    <h1 className='text-6xl md:text-7xl font-semibold text-gray-200 mb-6'>I'm Gurmit</h1>
                    <h1 className='text-4xl md:text-5xl text-gray-700 font-semibold'>Future Software Engineer</h1>
                </div>
                <div className='md:w-1/2 mt-8 md:mt-0 md:ml-48 w3-animate-zoom'>
                    <img src='images/developer.png' alt='Developer' className='max-w-full h-auto rounded-lg shadow-lg' />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
