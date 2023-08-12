'use client'
import React from 'react'

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className={`text-white text-md bg-[#5d50b4] py-3 px-5 rounded-3xl ${className}`}>
            {children}
        </button>
    )
}

export default Button