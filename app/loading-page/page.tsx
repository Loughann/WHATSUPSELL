"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { useRouter } from "next/navigation"
import { MatrixBackground } from "@/components/matrix-background" // Importar MatrixBackground

export default function LoadingPage() {
  const router = useRouter()

  const handleLoadingComplete = () => {
    console.log("Sequência de carregamento completa. Redirecionando...")
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      {" "}
      {/* Adicionado div para conter o background e o loading screen */}
      <MatrixBackground /> {/* Adicionar o fundo Matrix */}
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
    </div>
  )
}
