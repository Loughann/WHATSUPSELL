"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export function PageActivity() {
  const [onlineCount, setOnlineCount] = useState(0)

  useEffect(() => {
    // Set initial online count
    setOnlineCount(Math.floor(Math.random() * 50) + 180) // 180-230 pessoas online

    const updateActivity = () => {
      // Update online count occasionally
      if (Math.random() > 0.7) {
        setOnlineCount((prev) => {
          const change = Math.floor(Math.random() * 8) - 4 // -4 to +4
          return Math.max(170, Math.min(250, prev + change))
        })
      }
    }

    // Update activity every 3-6 seconds
    const interval = setInterval(updateActivity, 3000 + Math.random() * 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 max-w-md mx-auto">
      {/* Online Counter */}
      <div className="flex items-center justify-center gap-2 mb-4 text-upgradeBlue">
        <Users className="h-5 w-5" />
        <span className="text-sm font-semibold">
          <span className="animate-pulse">{onlineCount}</span> pessoas visualizando esta página agora
        </span>
      </div>
    </div>
  )
}
