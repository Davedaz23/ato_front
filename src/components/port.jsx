import React from "react";
import im1 from '../assets/various/im1.jpg';
import im2 from '../assets/various/im2.jpg';
import im3 from '../assets/various/im3.jpg';
import im4 from '../assets/various/im4.jpg';
import im5 from '../assets/various/im5.jpg';
import im6 from '../assets/various/im6.jpg';
import im7 from '../assets/various/im7.jpg';
import im8 from '../assets/various/im8.jpg';
import im9 from '../assets/various/im9.jpg';
import im10 from '../assets/various/im10.jpg';
import im11 from '../assets/various/im11.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Porti = () => {
    return (
        <div className="relative min-h-screen w-full">
            <div className="text-center flex items-center justify-center">
                <div className="flex-grow border-t border-gray-900 "></div>
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Stories We Have Told</h1>
                <div className="flex-grow border-t border-gray-900 "></div>
            </div>
            <div className=" ">
                <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">
                    <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 p-2">
                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                      

                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im1} alt="Defar" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>


                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im2} alt="im2" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                         
                        </div>

                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            <div>
                                <div className="relative w-full h-64 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im3} alt="im3" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-32 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im4} alt="im4" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 rounded shadow-lg">
                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            <div>
                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im5} alt="im5" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im6} alt="im6" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            <div>
                                <div className="relative w-full h-32 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im7} alt="im7" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-64 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im8} alt="im8" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 rounded shadow-lg">
                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">

                            <div>
                                <div className="relative w-full h-64 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im9} alt="im9" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-32 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im10} alt="im10" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            <div>
                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im11} alt="im11" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im2} alt="im2" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 rounded shadow-lg">
                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            <div>
                                <div className="relative w-full h-32 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im1} alt="im1" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-64 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im2} alt="im2" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center grid gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            <div>
                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im1} alt="im1" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full h-48 rounded-lg shadow-xl transform transition-transform duration-300 group hover:scale-105">
                                    <img className="w-full h-full rounded-lg object-cover" src={im2} alt="im2" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Porti;