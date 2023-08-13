'use client'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { getNFTDetails } from '@/components/Utils/nftDetails';

export default function Gallery() {
    const [showGallery, setShowGallery] = useState(false);
    const searchParams = useSearchParams();

    const { unityProvider } = useUnityContext({
        loaderUrl: "./build/Mada.loader.js",
        dataUrl: "./build/Mada.data",
        frameworkUrl: "./build/Mada.framework.js",
        codeUrl: "./build/Mada.wasm",
    })

    useEffect(() => {
        const contract = searchParams?.get('address');
        const chain = searchParams?.get('chain');
        if (contract && chain) {    
            getNFTDetails(contract as string, chain as string)
                .then((res) => {
                    setShowGallery(true);
                })
        }
    }, []);

    return (
        <div>
            {
                showGallery && (
                    <Unity unityProvider={unityProvider} style={{
                        width: "100%",
                        height: "100vh",
                    }} />
                )
            }
        </div>
    );
};

