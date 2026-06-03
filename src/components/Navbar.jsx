import React, { useState } from 'react'
import { index } from '../assets'

const Navbar = () => {
    const [close, setClose] = useState(false)
    return (
        <nav className='relative flex justify-between items-center sm:px-5 px-5 md:px-5 lg:px-15 bg-black w-full h-15 md:h-20 lg:h-20 sm:h-15 z-50 border-b border-green-500/20'>
            {/* Logo */}
            <div>
                <img
                    src={index.logo}
                    onClick={() => window.location.href = '/'}
                    className='cursor-pointer hover:scale-105 w-27 invert sm:w-25 md:w-27 lg:w-35 transition-all duration-300'
                    alt="logo"
                />
            </div>

            {/* Desktop Nav Links */}
            <div className='hidden sm:flex sm:gap-3 md:flex md:gap-5 lg:flex lg:gap-7'>
                {['home', 'features', 'pricing', 'about', 'contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className='text-green-300 capitalize sm:text-[15px] md:text-[17px] lg:text-lg font-space font-normal
                                   relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                                   after:bg-green-400 after:transition-all after:duration-300
                                   hover:after:w-full hover:text-green-100 transition-colors duration-200'
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
            </div>

            {/* Hamburger (mobile) */}
            <div className='block sm:hidden'>
                <i
                    onClick={() => setClose(!close)}
                    className='ri-menu-3-line text-green-400 text-xl cursor-pointer transition-all duration-300'
                ></i>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`block sm:hidden absolute top-0 right-0 w-70 h-screen bg-black border-l border-green-500/30
                transition-all duration-300 ease-in-out
                ${close ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
            >
                <img src={index.Herobg1} className='absolute w-full opacity-10 mt-10 -z-10' alt="" />

                <div className='flex justify-end p-6'>
                    <i
                        onClick={() => setClose(false)}
                        className='ri-close-line text-green-400 text-xl cursor-pointer transition-all duration-300'
                    ></i>
                </div>

                <div className='flex flex-col gap-5 py-4 items-center'>
                    {['home', 'features', 'pricing', 'about', 'contact'].map((item) => (
                        <a
                            key={item}
                            onClick={() => setClose(false)}
                            href={`#${item}`}
                            className='text-green-300 text-xl font-space font-semibold capitalize hover:text-green-100 transition-colors duration-200'
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </div>

                <div className='flex gap-3 justify-center mt-4'>
                    <button className='px-5 py-1.5 rounded-lg bg-green-500 text-black text-lg font-space font-semibold cursor-pointer hover:bg-green-400 transition-all duration-300 shadow-[0_0_12px_rgba(74,222,128,0.4)]'>
                        Sign in
                    </button>
                    <button className='px-5 py-1.5 rounded-lg border border-green-500 text-green-300 text-lg font-space font-medium cursor-pointer hover:bg-green-500/10 transition-all duration-300'>
                        Sign up
                    </button>
                </div>
            </div>

            {/* Desktop Buttons */}
            <div className='hidden sm:flex sm:gap-2 md:flex items-center lg:flex md:gap-3 lg:gap-4'>
                <button className='sm:px-3 sm:py-1 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full text-green-300 border border-green-500/50 bg-transparent cursor-pointer hover:bg-green-500/10 hover:border-green-400 font-space font-medium sm:text-[14px] md:text-[15px] lg:text-base transition-all duration-300'>
                    Login
                </button>
                <button className='sm:px-3 sm:py-1 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full text-black bg-green-400 hover:bg-green-300 cursor-pointer font-space font-semibold lg:text-base sm:text-[14px] md:text-[15px] transition-all duration-300 shadow-[0_0_14px_rgba(74,222,128,0.45)]'>
                    Sign up
                </button>
            </div>
        </nav>
    )
}

export default Navbar
