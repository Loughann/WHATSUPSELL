"use client"

import { useRef, useEffect } from "react"

export function UpgradeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurações
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number
    }> = []

    const particleCount = 40 // Aumentado de 30 para 40

    // Cores azuis do tema
    const upgradeBlue = "#00BFFF"
    const darkBlue = "#0080FF"
    const lightBlue = "#87CEEB"

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.body.scrollHeight
    }

    const createElements = () => {
      // Criar partículas azuis
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2, // Aumentado de 3+1 para 4+2
          speedX: (Math.random() - 0.5) * 0.8, // Aumentado de 0.5 para 0.8
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.6 + 0.3, // Aumentado de 0.5+0.2 para 0.6+0.3
          hue: Math.random() * 60 + 200, // Tons de azul
        })
      }
    }

    const drawParticle = (particle: (typeof particles)[0]) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.opacity})`
      ctx.fill()

      // Efeito de brilho azul mais intenso
      ctx.shadowColor = `hsla(${particle.hue}, 100%, 60%, 0.9)`
      ctx.shadowBlur = 12 // Aumentado de 8 para 12
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Aumentado de 120 para 150
            const opacity = (1 - distance / 150) * 0.25 // Aumentado de 0.15 para 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`
            ctx.lineWidth = 1.5 // Aumentado de 1 para 1.5
            ctx.stroke()
          }
        }
      }
    }

    const updateElements = () => {
      // Atualizar partículas
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Subtle opacity animation
        particle.opacity += (Math.random() - 0.5) * 0.02
        particle.opacity = Math.max(0.2, Math.min(0.8, particle.opacity))
      })
    }

    const drawGradientOverlay = () => {
      // Fundo completamente preto
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      // Limpar canvas
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar elementos
      updateElements()
      drawConnections()
      particles.forEach(drawParticle)

      animationId.current = requestAnimationFrame(animate)
    }

    resize()
    createElements()
    animate()

    // Event listeners
    window.addEventListener("resize", () => {
      resize()
      createElements()
    })

    // Cleanup
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
