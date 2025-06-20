"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Opcional: Desconectar o observer após a primeira aparição
          // observer.disconnect();
        } else {
          // Opcional: Resetar a visibilidade se o elemento sair da tela
          // setIsVisible(false);
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}
