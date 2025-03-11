import { useState, useEffect } from 'react'
import { fetchNFTsByCollection, NFTItem } from '../services/nftService'

export function useNFTCollection(collectionAddress: string) {
  const [nfts, setNfts] = useState<NFTItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchNFTs = async () => {
    try {
      setLoading(true)
      setError(null)

      const fetchedNFTs = await fetchNFTsByCollection(collectionAddress)
      setNfts(fetchedNFTs)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch NFTs')
      console.error('Error fetching NFTs:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (collectionAddress) {
      fetchNFTs()
    }
  }, [collectionAddress])

  return { nfts, loading, error, refetch: fetchNFTs }
} 