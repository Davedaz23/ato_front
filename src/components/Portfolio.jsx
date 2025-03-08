import React from "react";
import im1 from '../assets/various/im1.jpg'
import im2 from '../assets/various/im2.jpg'
import im3 from '../assets/various/im3.jpg'
import im4 from '../assets/various/im4.jpg'
import im5 from '../assets/various/im5.jpg'
import im6 from '../assets/various/im6.jpg'
import im7 from '../assets/various/im7.jpg'
import im8 from '../assets/various/im8.jpg'
import im9 from '../assets/various/im9.jpg'
import im10 from '../assets/various/im10.jpg'
import im11 from '../assets/various/im11.jpg'

const Portfolio = () => {
    return (
        <div className="pt-4 relative min-h-screen">
            <div className="bg-cyan-500 py-8 px-4 text-center">
                <h1 className="text-4xl font-bold text-white">Portfolio</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-blue-500 p-3 sm:p-8">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-cyan-500 h-1/4  ">
                    {/* Main card 1 */}
                    {/* <div className="grid gap-4 bg-cyan-300 p-4 rounded-lg"> */}
                    
                    <div className="grid gap-2 bg-cyan-300 p-0 rounded-lg h-1/2 ">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                         
                        </div>
                        
                    </div>
                    <div className="grid gap-2 bg-cyan-300 p-0 rounded-lg h-1/2 ">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                         
                        </div>
                        
                    </div>
                    <div className="grid gap-2 bg-cyan-300 p-0 rounded-lg h-1/2 ">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                         
                        </div>
                        
                    </div>
                    <div className="grid gap-2 bg-cyan-300 p-0 rounded-lg h-1/2 ">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                            <div className="bg-[#fcf4ff] h-1/4 rounded-xl shadow-sm p-1">
                                <img className="w-full h-full object-cover rounded-xl" src={im1} alt="Nested Image 1" />
                            </div>
                         
                        </div>
                        
                    </div>
                    
                    
                </div>

                
                {/* Main card 4 */}
                
            </div>
        </div>

    );
}

export default Portfolio;
