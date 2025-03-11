import { useTonConnectUI } from '@tonconnect/ui-react'

export function useTonConnect() {
  const [tonConnectUI] = useTonConnectUI()

  return {
    connected: tonConnectUI.connected,
    wallet: tonConnectUI.account,
    connect: () => {
      tonConnectUI.connectWallet()
    },
    disconnect: () => {
      tonConnectUI.disconnect()
    }
  }
} 