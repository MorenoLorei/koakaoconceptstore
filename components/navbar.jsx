"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 backdrop-blur-md shadow-md transition duration-300 ${
                isScrolled ? "bg-white" : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className={`text-2xl font-bold transition duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}>
                    Koakao
                </div>

                {/* Desktop Menu */}
                <div className={`hidden md:flex space-x-6 transition duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}>
                    <a href="#products">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    className={`md:hidden focus:outline-none transition duration-300 ${
                        isScrolled ? "text-gray-900" : "text-white"
                    }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 transition-all">
                    {["Home", "Products", "About", "Contact"].map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`block transition duration-300 ${
                                isScrolled ? "text-gray-900" : "text-white"
                            }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
