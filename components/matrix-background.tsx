"use client"

import { useRef, useEffect } from "react"

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // --- Configurações ----------------------------------------------------
    const characters = "01" // Apenas 0s e 1s para o efeito binário
    const fontSize = 20 // Tamanho da fonte dos caracteres (aumentado para menos densidade)
    const columns = [] as number[] // Array para armazenar a posição Y de cada coluna de caracteres
    // ---------------------------------------------------------------------

    /** Redimensiona o canvas e reinicia as colunas */
    const resize = () => {
      canvas.width = window.innerWidth
      // Usamos toda a altura do documento para cobrir páginas longas
      canvas.height = document.body.scrollHeight
      columns.length = Math.floor(canvas.width / fontSize)
      columns.fill(0) // Inicializa todas as colunas no topo
      ctx.font = `${fontSize}px monospace`
    }

    /** Desenha um quadro da animação */
    const draw = () => {
      // Fundo preto semi-transparente para criar o efeito de "rastro"
      ctx.fillStyle = "rgba(0,0,0,0.05)" // Opacidade baixa para um rastro sutil
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00BFFF" // Blue color, matching the whatsappGreen variable in tailwind.config.ts

      for (let i = 0; i < columns.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)] // Caractere aleatório (0 ou 1)
        const x = i * fontSize // Posição X da coluna
        const y = columns[i] // Posição Y atual do caractere na coluna

        ctx.fillText(text, x, y) // Desenha o caractere

        // Se o caractere atingir o final da tela (ou aleatoriamente), reinicia no topo
        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0 // Reinicia no topo
        } else {
          columns[i] = y + fontSize // Move o caractere para baixo
        }
      }

      // Solicita o próximo frame da animação
      animationId.current = requestAnimationFrame(draw)
    }

    // Inicializa e inicia a animação
    resize() // Define as dimensões iniciais e as colunas
    draw() // Inicia o loop de animação

    // Adiciona listener para redimensionamento da janela
    window.addEventListener("resize", resize)

    // Função de limpeza: cancela a animação e remove o listener de redimensionamento
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current)
      window.removeEventListener("resize", resize)
    }
  }, []) // O array de dependências vazio garante que o useEffect rode apenas uma vez na montagem

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none" // Garante que o canvas cubra a tela, esteja atrás do conteúdo e não seja clicável
      style={{ width: "100%", height: "100%" }} // Garante que o canvas ocupe 100% da largura e altura do pai (viewport)
    />
  )
}
