import { Collections } from './UI'
import { useState, useEffect } from 'react'
import { CollectionProps } from './types';

const RecentCollections = () => {
    const [collections, setCollections] = useState<CollectionProps[]>([]);

    useEffect(() => {
        const fetchContracts = async () => {
          try {
            const response = await fetch('/api/getContract');
            const data = await response.json();
            // convert data to CollectionProps
            const collections: CollectionProps[] = data.map((contract: any) => {
                return {
                    name: contract.name,
                    address: contract.address,
                    chain: contract.chain,
                    image: contract.image
                }
            })
            setCollections(collections);

          } catch (err) {
            console.error('An error occurred while fetching the contracts:', err);
          }
        };
    
        fetchContracts();
      }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="font-bold text-xl mx-6">
                    Recent
                </h1>
                <div className="my-3 flex">
                    <Collections collections={collections} />
                </div>
            </div>
        </>
    )
}

export default RecentCollections