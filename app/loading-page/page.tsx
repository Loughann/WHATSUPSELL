"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { useRouter } from "next/navigation"

export default function LoadingPage() {
  const router = useRouter()

  const handleLoadingComplete = () => {
    console.log("Sequência de carregamento completa. Redirecionando...")
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
    </div>
  )
}
