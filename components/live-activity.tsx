"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Eye, ShoppingCart, Users } from "lucide-react"

interface Activity {
  id: number
  name: string
  action: string
  icon: React.ReactNode
  time: string
}

export function LiveActivity() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [onlineCount, setOnlineCount] = useState(0)

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
    { text: "está visualizando esta oferta", icon: <Eye className="h-4 w-4 text-blue-400" /> },
    { text: "garantiu o acesso PREMIUM", icon: <ShoppingCart className="h-4 w-4 text-green-400" /> },
    { text: "está analisando os recursos", icon: <Eye className="h-4 w-4 text-blue-400" /> },
  ]

  useEffect(() => {
    // Set initial online count
    setOnlineCount(Math.floor(Math.random() * 50) + 150) // 150-200 pessoas online

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

      setActivities((prev) => {
        const updated = [newActivity, ...prev].slice(0, 1) // Keep only last 1 activity
        return updated
      })

      // Randomly update online count
      if (Math.random() > 0.7) {
        setOnlineCount((prev) => {
          const change = Math.floor(Math.random() * 6) - 3 // -3 to +3
          return Math.max(140, Math.min(220, prev + change))
        })
      }
    }

    // Generate initial activities
    generateActivity()
    setTimeout(() => generateActivity(), 1000)
    setTimeout(() => generateActivity(), 2000)

    // Continue generating activities
    const interval = setInterval(generateActivity, 3000 + Math.random() * 2000) // 3-5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 max-w-md mx-auto">
      {/* Online Counter */}
      <div className="flex items-center justify-center gap-2 mb-4 text-upgradeBlue">
        <Users className="h-5 w-5" />
        <span className="text-sm font-semibold">
          <span className="animate-pulse">{onlineCount}</span> pessoas visualizando esta oferta agora
        </span>
      </div>

      {/* Live Activities */}
      <div className="bg-black/40 rounded-lg p-4 border border-zinc-800">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-green-400">AO VIVO</span>
        </div>

        <div className="space-y-2">
          {activities.length > 0 && (
            <div className="flex items-start gap-3 text-sm transition-all duration-500 animate-fade-in-up">
              {activities[0].icon}
              <div className="flex-1 min-w-0">
                <span className="text-white font-medium">{activities[0].name}</span>
                <span className="text-gray-300 ml-1">{activities[0].action}</span>
              </div>
              <span className="text-xs text-gray-500 flex-shrink-0">{activities[0].time}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
