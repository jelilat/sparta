'use client'
import Image from "next/image"
import Link from "next/link"
import { CollectionProps } from '../types';
import { Button } from '@/components/UI'

type CollectionsProps = {
    collections: CollectionProps[];
}

const Collections = ({ collections }: CollectionsProps) => {
    return (
      <div className="flex flex-wrap justify-start items-center overflow-x-auto">
        {
          collections.map((collection, index) => (
            <div key={index} className="flex flex-col justify-center items-center m-4">
              <div className="image-container">
                <Image src={collection.image}
                  alt={collection.title}
                  className="rounded-xl image-content"
                  layout="fill" />
              </div>
              <h1 className="font-bold text-md my-3">
                {collection.title}
              </h1>
              <Button onClick={async () => {
              }}>
                <Link href={`/gallery?address=${collection.address}&chain=${collection.chain}`}>
                  View Gallery
                </Link>
            </Button>
            </div>
          ))
        }
        <div className="flex flex-col justify-center items-center m-4">

        </div>
      </div>
    )
  }
  
  

export default Collections