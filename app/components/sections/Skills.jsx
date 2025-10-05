"use client"

import ProgressBar from "../reusable/ProgressBar"

const Skills = () => {
    return (
        <div>
            <div className="overflow-y-hidden w-full text-center ">
                <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl">
                    Skills
                </h1>
            </div>
            <p className="text-center my-4">
                Things are needed because something is missing, and it must follow certain rules
            </p>
            <div className='w-[90%] mt-5 grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
                <div className='p-3 md:p-6 bg-dark-gradient rounded-xl shadow-2xl '>
                    <h2 className="text-2xl relative font-semibold after:absolute after:-bottom-3 after:bg-white after:h-1 after:w-20 after:left-0">
                        Front-end Development
                    </h2>
                    <div className="w-full mt-10 group">
                        <div className="w-full mb-2 flex justify-between">
                            <p className="text-sm opacity-80">
                                HTML / CSS
                            </p>
                            <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                                95%
                            </p>
                        </div>
                        <ProgressBar value={95} />
                        <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                            Structure and style web pages.
                        </p>
                    </div>
                    <div className="w-full mt-4 group">
                        <div className="w-full mb-2 flex justify-between">
                            <p className="text-sm opacity-80">
                                JavaScript
                            </p>
                            <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                                86%
                            </p>
                        </div>
                        <ProgressBar value={80} />
                        <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                            Add interactivity to websites.
                        </p>
                    </div>
                    <div className="w-full mt-4 group">
                        <div className="w-full mb-2 flex justify-between">
                            <p className="text-sm opacity-80">
                                React.js
                            </p>
                            <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                                79%%
                            </p>
                        </div>
                        <ProgressBar value={79} />
                        <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                            Create interactive user interfaces and fast web apps.
                        </p>
                    </div>
                </div>
                <div className='p-3 md:p-6 bg-dark-gradient rounded-xl shadow-2xl'>
                    <h2 className="text-2xl relative font-semibold after:absolute after:-bottom-3 after:bg-white after:h-1 after:w-20 after:left-0">
                        Back-end Development
                    </h2>
                    <div className="w-full mt-10 group">
                        <div className="w-full mb-2 flex justify-between">
                            <p className="text-sm opacity-80">
                                Node.js
                            </p>
                            <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                                75%
                            </p>
                        </div>
                        <ProgressBar value={75} />
                        <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                            Build fast, scalable applications and APIs.
                        </p>
                    </div>
                    <div className="w-full mt-4 group">
                        <div className="w-full mb-2 flex justify-between">
                            <p className="text-sm opacity-80">
                                Mongo DB
                            </p>
                            <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                                70%
                            </p>
                        </div>
                        <ProgressBar value={70} />
                        <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                            Store and manage large amounts of data efficiently.
                        </p>
                    </div>
                    <div className="w-full mt-4 group">
                        <div className="w-full mb-2 flex justify-between">
                            <p className="text-sm opacity-80">
                                PHP
                            </p>
                            <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                                89%
                            </p>
                        </div>
                        <ProgressBar value={89} />
                        <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                            Create dynamic, database-driven websites.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-3 w-[90%] mt-10 mx-auto md:p-6 bg-dark-gradient rounded-xl shadow-2xl'>
                <h2 className="text-2xl relative font-semibold after:absolute after:-bottom-3 after:bg-white after:h-1 after:w-20 after:left-0">
                    FrameWorks
                </h2>
                <div className="w-full mt-10 group">
                    <div className="w-full mb-2 flex justify-between">
                        <p className="text-sm opacity-80">
                            Node.js
                        </p>
                        <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                            75%
                        </p>
                    </div>
                    <ProgressBar value={75} />
                    <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                        Build fast, scalable applications and APIs.
                    </p>
                </div>
                <div className="w-full mt-4 group">
                    <div className="w-full mb-2 flex justify-between">
                        <p className="text-sm opacity-80">
                            Mongo DB
                        </p>
                        <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                            70%
                        </p>
                    </div>
                    <ProgressBar value={70} />
                    <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                        Store and manage large amounts of data efficiently.
                    </p>
                </div>
                <div className="w-full mt-4 group">
                    <div className="w-full mb-2 flex justify-between">
                        <p className="text-sm opacity-80">
                            PHP
                        </p>
                        <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
                            89%
                        </p>
                    </div>
                    <ProgressBar value={89} />
                    <p className="text-sm mt-2 opacity-0 -translate-y-2 group-hover:translate-0 group-hover:opacity-80 transition-all duration-300">
                        Create dynamic, database-driven websites.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills
