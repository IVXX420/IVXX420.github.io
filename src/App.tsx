import { TonConnectButton } from '@tonconnect/ui-react'
import { NFTGallery } from './components/NFTGallery'
import './App.css'

// Тестовая коллекция NFT Whales Club
const TEST_COLLECTION_ADDRESS = 'EQDk2VTvn04SUKJrW7rXahzdF8_Qi6utb0wj43InjABPAY-7'

function App() {
  return (
    <div className="app">
      <header>
        <TonConnectButton />
      </header>
      <main>
        <h1>TON NFT Gallery</h1>
        <NFTGallery collectionAddress={TEST_COLLECTION_ADDRESS} />
      </main>
    </div>
  )
}

export default App 