import React from "react";

const TempFead=()=>{

    return(
       <><div className="py-8 px-4 text-center flex items-center justify-center">
            <div className="flex-grow border-t border-gray-900 mx-4"></div>
            <h1 className="text-4xl font-bold text-gray-900">What they say we are</h1>
            <div className="flex-grow border-t border-gray-900 mx-4"></div>
        </div><div className="container max-w-6xl bg-transparent px-5 mx-auto my-10">
                <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 p-2">
                    {[user, sat, sat2, sat3].map((imgSrc, idx) => (
                        <div key={idx} className="flex flex-col justify-between text-justify  shadow-lg rounded-lg overflow-hidden p-4">
                            <div className="px-8 p-4">
                                <img
                                    className="h-20 w-20 rounded-full object-cover border-4 border-[#FD5F20] shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
                                    src={imgSrc}
                                    alt="Client" />
                            </div>
                            <div className="flex-grow px-4">
                                <p className="mb-4">
                                    {[
                                        `“Working with Ato Creative was a game-changer for our online presence...We couldn't be happier with the results!.”`,
                                        `“The video production team at Ato Creative exceeded our expectations...We highly recommend them for any video needs.”`,
                                        `“As a small business, we needed a strong brand identity to stand out. Ato Creative delivered just that.”`,
                                        `“Our partnership with Ato Creative has been instrumental in growing our online presence...They truly care about their clients' success.”`,
                                    ][idx]}
                                </p>
                                <p className="text-md font-semibold text-orange-500 mb-2 cursor-pointer tracking-wider drop-shadow-lg relative group shadow-xl">
                                    <i>
                                        {[
                                            "John Doe, CEO of TechStart",
                                            "Jane Smith, Marketing Director at MarketMakers",
                                            "Michael Brown, Founder of Crafty Creations",
                                            "Emily White, COO of Fitness Fusion",
                                        ][idx]}
                                    </i>
                                    <span className="absolute left-0 bottom-0 h-1 bg-orange-500 transition-all duration-300 ease-in-out w-0 group-hover:w-full shadow-5xl"></span>
                                </p>
                            </div>
                            <button className="bg-[#FD5F20] text-gray-200 rounded-xl text-sm p-2 mt-auto">
                                View Project
                            </button>
                        </div>
                    ))}
                </div>
            </div></> 
    );
}