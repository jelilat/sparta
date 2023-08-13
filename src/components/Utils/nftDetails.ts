const options = {
    method: 'GET',
    headers: {
        accept: 'application/json', 
        'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY!
    }
  };

const nftDetails = async (contractAddress: string, chain: string) => {
    const nftDetails = await fetch(`https://api.opensea.io/v2/chain/${chain}/contract/${contractAddress}/nfts?limit=15`, options)
    const nftDetailsJSON = await nftDetails.json();
    return nftDetailsJSON;
}
export const getNFTDetails = async (contractAddress: string, chain: string) => {
    const nftDetailsJSON = await nftDetails(contractAddress, chain)
    localStorage.setItem('nftDetails', JSON.stringify(nftDetailsJSON));
}

export const getProfileImageUrl = async (contractAddress: string, chain: string) => {
    const nftDetailsJSON = await nftDetails(contractAddress, chain)
    return nftDetailsJSON?.nfts[0]?.image_url;
}