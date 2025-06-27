"use client"

export function ScarcityBar() {
  const today = new Date()
  const day = today.getDate()
  const months = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ]
  const month = months[today.getMonth()]
  const year = today.getFullYear()
  const todayFormatted = `SEXTA-FEIRA, ${day} DE ${month} DE ${year}`

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-upgradeBlue via-blue-500 to-upgradeBlue text-white py-3 px-4 shadow-lg animate-pulse">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-bold tracking-wide">
          🔥 OFERTA ÚNICA ATÉ {todayFormatted} - ACESSE O PREMIUM POR APENAS R$19,90! 🔥
        </p>
      </div>
    </div>
  )
}
