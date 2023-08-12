'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // You can adjust this value based on the height of your hero banner
        const offset = window.scrollY > window.innerHeight * 0.5;
        setIsScrolled(offset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <div className="container mx-auto py-2 flex justify-between items-center">
                    <span className="flex">
                        <Image src={`${isScrolled ? "/logo-black.png" : "/logo-white.png"}`} width={50} height={50} alt="logo" />
                        <h1 className={`text-2xl font-semibold p-2 ${!isScrolled && "text-white"}`}>Sparta</h1>
                    </span>
                    <button className="text-white text-md bg-[#5d50b4] py-3 px-5 rounded-3xl">
                        Create Gallery
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header