'use client'
import Image from "next/image"
import { useState } from 'react'
import { Button } from '@/components/UI'

const Template = () => {
    const [selectedImage, setSelectedImage] = useState("");

    const images = [
        '/museum.jpeg',
        '/modern.png',
    ];
    const names = [
        "Museum",
        "Modern"
    ]
    return (
        <div>
            <h1 className="font-bold text-xl">
                Select template
            </h1>
            <div>
                <div className="flex flex-wrap justify-center">
                {
                    images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image src={image}  
                                width={200} height={200} alt="Option" 
                                className={`rounded-xl m-4 cursor-pointer border-4 ${selectedImage === image ? 'border-[#5d50b4]' : 'border-transparent'}`} />
                            <p className="text-center">
                                {names[index]}
                            </p>
                        </div>
                    ))
                }
                </div>
                <Button onClick={() => {}}>
                    Create
                </Button>
            </div>
        </div>
    )
}

export default Template