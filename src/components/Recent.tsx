import { Collections } from './UI'
import { topCollections } from '@/components/constants'
import { useState, useEffect } from 'react'

const RecentCollections = () => {
    useEffect(() => {
        const fetchContracts = async () => {
          try {
            const response = await fetch('/api/getContract');
            const data = await response.json();
            console.log(data);
            // setContracts(data);
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
                    Top collections
                </h1>
                <div className="my-3 flex">
                    <Collections collections={topCollections} />
                </div>
            </div>
        </>
    )
}

export default RecentCollections