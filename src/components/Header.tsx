'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Modal, Button } from '@/components/UI';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAccount } from '@wagmi/core'
import Template from './Template';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
                    <Button onClick={() => setIsModalOpen(true)}>
                        Create Gallery
                    </Button>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <div className="justify-center text-center mx-auto">
                            {
                                getAccount().isConnected ? (
                                    <Template />
                                ) : <ConnectButton />
                            }
                        </div>
                    </Modal>
                </div>
            </header>
        </div>
    )
}

export default Header