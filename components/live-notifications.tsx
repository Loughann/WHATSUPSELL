"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Eye, ShoppingCart, X } from "lucide-react"

interface Activity {
  id: number
  name: string
  action: string
  icon: React.ReactNode
  time: string
}

export function LiveNotifications() {
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const names = [
    "Maria Silva",
    "João Santos",
    "Ana Costa",
    "Carlos Oliveira",
    "Fernanda Lima",
    "Pedro Almeida",
    "Juliana Rocha",
    "Rafael Souza",
    "Camila Ferreira",
    "Lucas Pereira",
    "Beatriz Martins",
    "Diego Ribeiro",
    "Larissa Gomes",
    "Thiago Barbosa",
    "Gabriela Dias",
  ]

  const actions = [
    { text: "acabou de adquirir o PREMIUM", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "garantiu o acesso PREMIUM", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "acabou de comprar o PREMIUM", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "finalizou a compra do PREMIUM", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "adquiriu o acesso completo", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "confirmou a compra agora", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "está visualizando esta oferta", icon: <Eye className="h-4 w-4 text-blue-400" /> },
  ]

  const generateActivity = () => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomAction = actions[Math.floor(Math.random() * actions.length)]
    const now = new Date()
    const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

    const newActivity: Activity = {
      id: Date.now(),
      name: randomName,
      action: randomAction.text,
      icon: randomAction.icon,
      time: timeString,
    }

    setCurrentActivity(newActivity)
    setIsVisible(true)

    // Hide notification after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const closeNotification = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    // Generate first notification after 2 seconds
    const initialTimeout = setTimeout(() => {
      generateActivity()
    }, 2000)

    // Then generate every 4 seconds
    const interval = setInterval(() => {
      generateActivity()
    }, 4000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!currentActivity || !isVisible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm transform transition-all duration-500 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="bg-black/90 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-2xl p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-green-400">AO VIVO</span>
          </div>
          <button onClick={closeNotification} className="text-gray-400 hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex items-start gap-3 text-sm">
          {currentActivity.icon}
          <div className="flex-1 min-w-0">
            <span className="text-white font-medium">{currentActivity.name}</span>
            <span className="text-gray-300 ml-1">{currentActivity.action}</span>
            <div className="text-xs text-gray-500 mt-1">{currentActivity.time}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
