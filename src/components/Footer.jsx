import React from 'react'
import Logo from './Logo'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-16 bg-black text-white py-8 mt-16">
            <div className="container mx-auto px-4 bg-black  ">
                <div className='grid grid-cols-1  md:grid-cols-2 gap-8 mb-8 lg:grid-cols-3 '>

                    {/* box-1  */}
                    <div className='flex flex-col items-start   '>
                        <Logo />
                        <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla.</p>
                    </div>

                    {/* box-2  */}
                    <div className='flex flex-col justify-center items-center '>
                        <h3>We Accept</h3>
                        <div className='flex space-x-4'>
                            <div>Esewa</div>
                            <div>Khalti</div>
                            <div>FonePay</div>
                        </div>
                    </div>
                    {/* box-3  */}
                    <div className='flex flex-col justify-center'>
                        <div className='flex text-center justify-center'>
                            Contact Us
                        </div>
                        <div className="box2    flex space-x-4 justify-center  items-end">

                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaFacebook className='text-2xl' /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaInstagram className='text-2xl' /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FaLinkedin className='text-2xl' /></a>
                        </div>
                    </div>
                </div>
                <div className='text-center py-4'>
                    All rights reserved &copy; {new Date().getFullYear()}
                </div>
            <hr />
            <div className='flex justify-end px-6 mx-auto'>
                <a href="#">Terms & Condition.</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer
