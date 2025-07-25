"use client"

import { Zap, BarChart2, Brain, Cloud, LifeBuoy, ArrowRight, Heart } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ScarcityBar } from "@/components/scarcity-bar" // Importar a barra de escassez
import { LiveNotifications } from "@/components/live-notifications"
import { PageActivity } from "@/components/page-activity"
import { UpgradeBackground } from "@/components/upgrade-background" // Novo fundo animado

import { Button, Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui"

export default function UpsellPage() {
  // Usar o hook para cada seção
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollReveal()
  const { ref: featuresRef, isVisible: isFeaturesVisible } = useScrollReveal()
  const { ref: ctaRef, isVisible: isCtaVisible } = useScrollReveal()

  const handleCheckoutRedirect = () => {
    window.open("https://pay.cakto.com.br/pg3cspr_487909", "_blank")
  }

  return (
    <div className="relative flex min-h-screen flex-col text-white font-sans">
      {/* Barra de escassez */}
      <ScarcityBar />

      {/* Fundo animado de upgrade */}
      <UpgradeBackground />

      {/* Notificações ao vivo */}
      <LiveNotifications />

      {/* Conteúdo principal */}
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 pt-32 pb-14 lg:px-8">
        {/* HERO */}
        <section
          ref={heroRef}
          className={`mb-24 text-center transition-all duration-1000 ease-out ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 flex items-center justify-center gap-4 text-upgradeBlue">
            <h1 className="text-4-5xl font-extrabold tracking-tight text-glow animate-pulse-glow">
              VERSÃO&nbsp;PREMIUM
            </h1>{" "}
            {/* Adicionado animate-pulse-glow */}
          </div>
          <h2 className="mb-4 text-4xl font-bold">Desbloqueie o Próximo Nível do seu Relatório AGORA mesmo!</h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg">
            Leve sua análise de dados para o futuro com monitoramento em tempo real, relatórios super avançados e
            inteligência artificial integrada para identificar todos tipos de comportamentos suspeitos.
          </p>
          {/* Novo texto persuasivo */}
          <p className="mx-auto mb-8 max-w-2xl text-xl font-semibold text-upgradeBlue">
            Por apenas <span className="text-white">R$19,90</span>, você garante acesso ilimitado a todos os recursos
            Premium e descobre a toda verdade que você procura!
          </p>
          {/* CTA PRINCIPAL */}
          <Button
            size="lg"
            onClick={handleCheckoutRedirect}
            className="rounded-full bg-upgradeBlue px-10 py-6 text-xl font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-500 whitespace-nowrap cursor-pointer"
          >
            <Heart className="mr-3 h-6 w-6 fill-current" />
            ATUALIZAR AGORA!
          </Button>
          {/* Simulação de pessoas na página */}
          <PageActivity />
        </section>
        {/* FEATURES */}
        <section
          ref={featuresRef}
          className={`mb-24 grid gap-8 transition-all duration-1000 ease-out ${
            isFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature) => (
            <Card key={feature.title} className="bg-zinc-900 border-zinc-800 shadow-xl">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full border border-upgradeBlue bg-black p-5 icon-glow animate-pulse-icon-glow">
                  {feature.icon}
                </div>
                <CardTitle className="mb-2 text-center text-2xl text-upgradeBlue text-glow animate-pulse-glow">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base text-white">{feature.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
        {/* CTA FINAL */}
        <section
          ref={ctaRef}
          className={`mx-auto max-w-3xl rounded-lg bg-zinc-900 px-8 py-12 text-center shadow-2xl transition-all duration-1000 ease-out ${
            isCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="mb-6 text-3xl font-bold text-glow animate-pulse-glow">
            CHEGA DE DÚVIDAS! A VERDADE CUSTA APENAS R$19,90.
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-lg">
            Não perca mais tempo na escuridão. Desvende cada segredo, cada conversa, cada movimento. Com o PREMIUM é a
            sua ÚNICA chance de ter o controle total e a paz que só a verdade pode trazer. Garante agora!
          </p>
          <Button
            size="lg"
            onClick={handleCheckoutRedirect}
            className="rounded-full bg-upgradeBlue px-6 py-6 text-xl font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-500 whitespace-nowrap cursor-pointer"
          >
            GARANTIR POR R$19,90 AGORA!
          </Button>
          <p className="mt-4 text-lg font-bold text-upgradeBlue animate-pulse">⚠️VAI CONTINUAR SENDO TROUXA ATÉ QUANDO?⚠️</p>
        </section>
      </main>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Dados de features separados para manter o JSX limpo                */
/* ------------------------------------------------------------------ */
const features = [
  {
    title: "Monitoramento em Tempo Real",
    desc: "Veja conversas, chamadas e mídias à medida que acontecem para insights imediatos.",
    icon: <Zap className="h-10 w-10 text-upgradeBlue" />,
  },
  {
    title: "Análise Avançada de Dados",
    desc: "Descubra padrões de comunicação, tópicos e tendências com relatórios completos.",
    icon: <BarChart2 className="h-10 w-10 text-upgradeBlue" />,
  },
  {
    title: "Insights Impulsionados por IA",
    desc: "Resumos automáticos, detecção de sentimento e identificação de palavras-chave.",
    icon: <Brain className="h-10 w-10 text-upgradeBlue" />,
  },
  {
    title: "Armazenamento Seguro na Nuvem",
    desc: "Acesse todos os seus dados de qualquer lugar, a qualquer momento, com segurança.",
    icon: <Cloud className="h-10 w-10 text-upgradeBlue" />,
  },
  {
    title: "Suporte Prioritário 24/7",
    desc: "Fale diretamente com nossa equipe sempre que precisar, sem filas.",
    icon: <LifeBuoy className="h-10 w-10 text-upgradeBlue" />,
  },
  {
    title: "E Muito Mais!",
    desc: "Descubra todas as funcionalidades exclusivas que esperam por você na versão premium.",
    icon: <ArrowRight className="h-10 w-10 text-upgradeBlue" />,
  },
]
