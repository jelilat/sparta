'use client'
import React from 'react'

type SelectProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    options: string[];
}

const Select = ({ value, onChange, className, options }: SelectProps) => {
    return (
        <select 
            value={value}
            onChange={onChange}
            className={`border border-gray-300 rounded-md p-2 ${className}`}
        >
            {
                options?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))
            }
        </select>
    )
}

export default Select