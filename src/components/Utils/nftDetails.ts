const options = {
    method: 'GET',
    headers: {
        accept: 'application/json', 
        'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY!
    }
  };

export const getNFTDetails = async (contractAddress: string, chain: string) => {
    const nftDetails = await fetch(`https://api.opensea.io/v2/chain/${chain}/contract/${contractAddress}/nfts?limit=15`, options)
    const nftDetailsJSON = await nftDetails.json();
    localStorage.setItem('nftDetails', JSON.stringify(nftDetailsJSON));
}
