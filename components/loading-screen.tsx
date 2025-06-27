"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation" // Import useRouter

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const router = useRouter() // Inicializa useRouter

  const messages = [
    "Iniciando protocolo de acesso Premium...",
    "Decodificando dados criptografados do WhatsApp...",
    "Ativando monitoramento em tempo real...",
    "Processando insights de inteligência artificial...",
    "Acesso total concedido! Redirecionando para o painel...",
  ]

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const totalMessages = messages.length
    const typingDuration = 2000 // Corresponde à duração da animação CSS (2s)
    const pauseAfterTyping = 500 // Pausa antes da próxima mensagem ou redirecionamento (0.5s)
    const totalTimePerMessage = typingDuration + pauseAfterTyping

    const timer = setTimeout(() => {
      if (currentMessageIndex < totalMessages - 1) {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1)
      } else {
        // Última mensagem exibida, agora redireciona
        onLoadingComplete() // Chama a função de callback
        router.push("/") // Redireciona para a página principal
      }
    }, totalTimePerMessage)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, messages.length, onLoadingComplete, router])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 text-upgradeBlue">
      {" "}
      {/* Alterado para bg-black/80 para transparência */}
      <Loader2 className="h-16 w-16 animate-spin text-upgradeBlue mb-8" />
      <div className="relative w-full max-w-md overflow-hidden whitespace-nowrap border-r-2 border-solid border-upgradeBlue font-mono text-lg sm:text-xl md:text-2xl">
        {/* Usa key para forçar a re-animação na mudança de mensagem */}
        <span key={currentMessageIndex} className="block text-center animate-typing">
          {messages[currentMessageIndex]}
        </span>
      </div>
      <p className="mt-4 text-sm text-gray-400">Por favor, aguarde...</p>
    </div>
  )
}
