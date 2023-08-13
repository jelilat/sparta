import { Collections } from './UI'
import { topCollections } from '@/components/constants'

const TopCollections = () => {
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

export default TopCollections