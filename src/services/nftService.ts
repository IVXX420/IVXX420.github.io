import axios from 'axios'
import TonWeb from 'tonweb'

const TON_API_URL = 'https://tonapi.io/v2'
const TON_API_KEY = import.meta.env.VITE_TON_API_KEY

interface NFTMetadata {
  name: string
  description: string
  image: string
}

export interface NFTItem {
  id: string
  address: string
  metadata: NFTMetadata
}

export async function fetchNFTsByCollection(collectionAddress: string): Promise<NFTItem[]> {
  if (!TON_API_KEY || TON_API_KEY === 'YOUR_TONAPI_KEY') {
    throw new Error('TonAPI key is not configured. Please set VITE_TON_API_KEY in your .env file')
  }

  try {
    const response = await axios.get(`${TON_API_URL}/nfts/collections/${collectionAddress}/items`, {
      headers: {
        'Authorization': `Bearer ${TON_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.data.nft_items) {
      throw new Error('Invalid response format from TonAPI')
    }

    return response.data.nft_items.map((item: any) => ({
      id: item.address,
      address: item.address,
      metadata: {
        name: item.metadata?.name || 'Unnamed NFT',
        description: item.metadata?.description || 'No description',
        image: item.metadata?.image?.original || 'https://placehold.co/400x400/2a2a2a/white?text=No+Image'
      }
    }))
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Invalid TonAPI key. Please check your VITE_TON_API_KEY in .env file')
      }
      if (error.response?.status === 404) {
        throw new Error('NFT collection not found')
      }
      throw new Error(`TonAPI error: ${error.response?.data?.error || error.message}`)
    }
    console.error('Error fetching NFTs:', error)
    throw new Error('Failed to fetch NFTs from collection')
  }
}

// Альтернативный метод с использованием TonWeb
export async function fetchNFTsUsingTonWeb(collectionAddress: string): Promise<NFTItem[]> {
  try {
    const provider = new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC')
    const tonweb = new TonWeb(provider)
    
    // Создаем адрес коллекции
    const address = new TonWeb.utils.Address(collectionAddress)
    
    // Проверяем существование коллекции
    await tonweb.provider.call2(
      address.toString(),
      'get_collection_data'
    )

    const nfts: NFTItem[] = []
    
    // Получаем количество NFT в коллекции
    const totalSupply = await tonweb.provider.call2(
      address.toString(),
      'get_total_supply'
    )

    // Получаем NFT по индексам
    for (let i = 0; i < Number(totalSupply); i++) {
      try {
        // Получаем адрес NFT по индексу
        const nftAddress = await tonweb.provider.call2(
          address.toString(),
          'get_nft_address_by_index',
          [['num', i.toString()]]
        )

        // Получаем данные NFT
        const nftData = await tonweb.provider.call2(
          nftAddress.toString(),
          'get_nft_data'
        )

        // Пытаемся получить метаданные
        let metadata: NFTMetadata = {
          name: `NFT #${i}`,
          description: 'TON NFT',
          image: 'https://placehold.co/400x400/2a2a2a/white?text=TON+NFT'
        }

        if (nftData.content) {
          try {
            // Предполагаем, что content - это URI метаданных
            const metadataResponse = await axios.get(nftData.content)
            metadata = metadataResponse.data
          } catch (metadataError) {
            console.warn(`Failed to fetch metadata for NFT #${i}:`, metadataError)
          }
        }

        nfts.push({
          id: nftAddress.toString(),
          address: nftAddress.toString(),
          metadata
        })
      } catch (nftError) {
        console.warn(`Failed to fetch NFT #${i}:`, nftError)
        continue
      }
    }

    return nfts
  } catch (error) {
    console.error('Error fetching NFTs using TonWeb:', error)
    throw new Error('Failed to fetch NFTs from collection')
  }
} 