import { TonConnectButton } from '@tonconnect/ui-react'
import { useTonConnect } from './hooks/useTonConnect'
import './App.css'

function App() {
  const { connected } = useTonConnect()

  return (
    <div className="container">
      <header className="header">
        <h1>TON Wallet Connection</h1>
        <TonConnectButton />
      </header>
      
      <main className="main">
        {connected ? (
          <div className="connected-message">
            <h2>Wallet Successfully Connected! 🎉</h2>
            <p>You can now interact with the TON blockchain</p>
          </div>
        ) : (
          <div className="welcome-message">
            <h2>Welcome to TON DApp</h2>
            <p>Please connect your Tonkeeper wallet to continue</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App 