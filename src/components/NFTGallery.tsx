import { useNFTCollection } from '../hooks/useNFTCollection'
import './NFTGallery.css'

interface NFTGalleryProps {
  collectionAddress: string
}

export function NFTGallery({ collectionAddress }: NFTGalleryProps) {
  const { nfts, loading, error } = useNFTCollection(collectionAddress)

  if (loading) {
    return (
      <div className="nft-loading">
        <div className="loader"></div>
        <p>Loading NFTs from collection...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="nft-error">
        <p>Error: {error}</p>
        <p className="error-details">Collection Address: {collectionAddress}</p>
      </div>
    )
  }

  if (!nfts.length) {
    return (
      <div className="nft-empty">
        <h2>No NFTs Found</h2>
        <p>This collection appears to be empty or is still loading.</p>
      </div>
    )
  }

  return (
    <div className="nft-gallery">
      <h2>Collection NFTs</h2>
      <div className="collection-info">
        <p>Collection Address: {collectionAddress}</p>
        <p>Total NFTs: {nfts.length}</p>
      </div>
      <div className="nft-grid">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <div className="nft-image-container">
              <img src={nft.metadata.image} alt={nft.metadata.name} className="nft-image" />
            </div>
            <div className="nft-info">
              <h3>{nft.metadata.name}</h3>
              <p className="nft-description">{nft.metadata.description}</p>
              <p className="nft-address">
                Address: {nft.address.slice(0, 6)}...{nft.address.slice(-4)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 