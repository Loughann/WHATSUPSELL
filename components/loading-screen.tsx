"use client"

import { useState, useEffect, useRef } from "react" // Importa useRef
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const router = useRouter()

  const messages = [
    "Confirmando o acesso...",
    "Gerando relatório completo...",
    "Decodificando dados criptografados do WhatsApp...",
    "Tentativa de acesso ao sistema...",
    "Acesso total concedido! Acessando o painel...",
  ]

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [percentage, setPercentage] = useState(0) // Novo estado para a porcentagem
  const timePerMessage = 2500 // Tempo para cada mensagem ficar visível (2.5 segundos)
  const totalLoadingDuration = messages.length * timePerMessage // Duração total para a barra preencher

  const animationFrameId = useRef<number | null>(null) // Ref para o ID do requestAnimationFrame
  const startTimeRef = useRef<number | null>(null) // Ref para o tempo de início da animação

  // Efeito para animar a porcentagem
  useEffect(() => {
    startTimeRef.current = Date.now() // Define o tempo de início da animação

    const animatePercentage = () => {
      const elapsed = Date.now() - (startTimeRef.current || Date.now())
      const progress = Math.min(1, elapsed / totalLoadingDuration) // Progresso de 0 a 1
      setPercentage(Math.round(progress * 100)) // Atualiza a porcentagem

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animatePercentage)
      } else {
        setPercentage(100) // Garante que chegue a 100% no final
      }
    }

    animationFrameId.current = requestAnimationFrame(animatePercentage)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [totalLoadingDuration]) // Depende da duração total

  // Efeito para mudar as mensagens e redirecionar
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < messages.length - 1) {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1)
      } else {
        console.log("Última mensagem concluída. Redirecionando para a página principal com parâmetro 'loaded=true'...")
        onLoadingComplete()
        router.push("/?loaded=true")
      }
    }, timePerMessage)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, messages.length, onLoadingComplete, router, timePerMessage])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 text-whatsappGreen">
      {/* Bolinha de loading com efeito de LED */}
      <Loader2 className="h-16 w-16 animate-spin text-upgradeBlue mb-4 icon-glow animate-pulse-icon-glow" />

      {/* Porcentagem de carregamento */}
      <div className="mb-8 text-4xl font-bold text-upgradeBlue text-glow animate-pulse-glow">{percentage}%</div>

      <div className="relative w-full max-w-md whitespace-normal font-mono text-lg sm:text-xl md:text-2xl px-4">
        <span key={currentMessageIndex} className="block text-center text-upgradeBlue text-glow animate-pulse-glow">
          {messages[currentMessageIndex]}
        </span>
      </div>
      <p className="mt-4 text-sm text-gray-400 text-glow animate-pulse-glow">Por favor, aguarde...</p>
    </div>
  )
}
