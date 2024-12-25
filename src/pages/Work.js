import React from 'react';
import Sidebar from '../components/sidebar';
import '../css/webstructure.css';
import { useNavigate } from 'react-router-dom';

function Work() {
    const navigate = useNavigate(); // Hook for navigating programmatically

    return (
        <div>
            <Sidebar />
            <div className=' flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8 ml-0 md:ml-32 '>
                {/* Left side content */}
                <div className='text-center md:text-left md:w-1/2 w-full w3-animate-left'>
                    <section  >
                        <div className="max-w-4xl mx-auto px-6">
                            <h1 className='text-4xl sm:text-5xl text-[#e0d731] md:text-6xl font-bold mb-8 leading-tight'>
                                Work & Experience
                            </h1>
                            <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300 mb-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programmer at Coherent Corp</h3>
                                <p><strong className="text-blue-600">Duration:</strong>6 months</p>
                                <p className="text-gray-600 mt-4 mb-6">
                                    At Coherent Corp, I served as a programmer where I contributed to a wide range of projects that supported the company's operational systems and machine monitoring processes. My role involved both software development and troubleshooting, focusing on improving system efficiency and automating critical tasks.
                                </p>
                                <div className="overflow-y-auto max-h-[300px] border p-4">
                                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                                    <li>
                                    <strong className="text-blue-600">Pass Over System Customization:</strong> Customized a pass-over system to optimize workflows and streamline machine operations.
                                    </li>
                                    <li>
                                    <strong className="text-blue-600">Oven Temperature Monitoring System:</strong> Developed a website that fetched data from a database and displayed oven temperature data in tables and graphs for better analysis.
                                    </li>
                                    <li>
                                    <strong className="text-blue-600">eDowntime System:</strong> Contributed to the eDowntime system, tracking machine downtime to improve overall productivity.
                                    </li>
                                    <li>
                                    <strong className="text-blue-600">Machine Checklist Development:</strong> Developed a digital checklist for machines, ensuring operators followed standardized processes.
                                    </li>
                                    <li>
                                    <strong className="text-blue-600">Gas Farm System:</strong> Built a system for the Gas Farm where operators could input gas values, which would be uploaded to the database and trigger automated email alerts to engineers.
                                    </li>
                                    <li>
                                    <strong className="text-blue-600">Dashboard System:</strong> Created a dashboard displaying machine uptime and downtime for quick performance assessment.
                                    </li>
                                    <li>
                                    <strong className="text-blue-600">Machine Testing Software and Debugging:</strong> Assisted in testing machine software and debugged issues such as fixing the DSV machine's inability to save images from the camera to the folder.
                                    </li>
                                </ul>
                                </div>

                            </div>
                           
                        </div>
                        
                    </section>
                    
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16 w3-animate-zoom overflow-y-auto max-h-[600px] grid grid-cols-2 gap-4">
                    <img src='images/1.jpeg' className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></img>
                    <img src='images/2.jpeg' className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></img>
                    <img src='images/3.jpeg' className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></img>
                    <img src='images/4.jpeg' className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></img>
                    <img src='images/5.jpeg' className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></img>
                    <img src='images/6.jpeg' className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></img>
                </div>


               
            </div>
        </div>
    );
}

export default Work;
