"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full md:w-[60%] border-b border-b-[rgb(0,0,0,0.5)] p-4 flex items-center justify-between m-auto mt-10">
            <nav className="flex justify-between w-full">
                <div className="flex items-center space-x-10">
                    <Link href="/" legacyBehavior>
                        <a className="text-black font-semibold text-xl cursor-pointer">My Blog</a>
                    </Link>
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="/" legacyBehavior>
                            <a className="text-gray-700 hover:text-gray-900">Home</a>
                        </Link>
                        <Link href="/blogs" legacyBehavior>
                            <a className="text-gray-700 hover:text-gray-900">Blogs</a>
                        </Link>
                    </div>
                </div>
                
                <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
            {isOpen && (
                <nav className="md:hidden w-full mt-4">
                    <Link href="/" legacyBehavior>
                        <a className="block text-gray-700 hover:text-gray-900 mb-2">Home</a>
                    </Link>
                    <Link href="/blogs" legacyBehavior>
                        <a className="block text-gray-700 hover:text-gray-900 mb-2">Blogs</a>
                    </Link>
                    <Link href="/favorites" legacyBehavior>
                        <a className="block px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                            Favorites
                        </a>
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
