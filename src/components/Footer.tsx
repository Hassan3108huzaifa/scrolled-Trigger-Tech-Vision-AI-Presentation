import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">ScrollTrigger - HassanRJ</h3>
                        <p className="text-gray-400">Learned New Thing ScrollTrigger - HassanRJ</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                        <p className="text-gray-400">Email: <a href="mailto:huzaifa3108hassan@gmail.com">huzaifa3108hassan@gmail.com</a></p>
                        <p className="text-gray-400">Phone: +92 3161097202</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://x.com/huzaifaBhai3108" target='_blank' className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
                            <a href="https://www.linkedin.com/in/hassan-rj-148220295/" target='_blank' className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
                            <a href="https://github.com/hassan3108huzaifa/" target='_blank' className="text-gray-400 hover:text-white transition duration-300">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center text-gray-400">
                    <p>&copy; 2024 TechVision AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer