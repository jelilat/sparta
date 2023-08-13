'use client'
import Image from "next/image"
import { useState } from 'react'
import { Button, Input } from '@/components/UI'
import { useRouter } from "next/navigation"

const Template = () => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState("");
    const [addContract, setAddContract] = useState(false);
    const [address, setAddress] = useState("");
    const [chain, setChain] = useState("");
    const [name, setName] = useState("");

    const images = [
        '/museum.jpeg',
        '/modern.png',
    ];
    const names = [
        "Museum",
        "Modern"
    ]

    const addContractToDb = async () => {
        try {
          const response = await fetch('/api/addcontract', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address, chain, name }),
          });
    
          if (response.status === 201) {
            alert('Contract added successfully!');
            
            router.push(`/gallery?address=${address}&chain=${chain}`);
          } else {
            const text = await response.text();
            alert('Failed to add contract: ' + text);
          }
        } catch (err) {
          console.error(err);
          alert('An error occurred while adding the contract');
        }
      };
    

    return (
        <div>
            <div>
                {
                    !addContract ? (
                        <div>
                        <h1 className="font-bold text-xl">
                            Select template
                        </h1>
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
                            <Button onClick={() => {setAddContract(true)}}>
                                Create
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Input placeholder="Enter contract name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <Input placeholder="Enter contract address" onChange={(e) => {
                                setAddress(e.target.value)
                            }} />
                            <select onChange={(e) => {
                                setChain(e.target.value)
                            }}
                                className="border-2 border-gray-300 rounded-xl p-2 my-2">
                                <option value="">Select chain</option>
                                <option value="optimism">Optimism</option>
                                <option value="base">Base</option>
                                <option value="zora">Zora</option>
                            </select>
                            <Button onClick={() => {
                                addContractToDb()
                            }}>
                                Create
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Template