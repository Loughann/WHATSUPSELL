import UpsellPage from "./upsell-page"
import LoadingPage from "./loading-page/page" // Importa o componente da página de carregamento

export default function Page({ searchParams }: { searchParams: { loaded?: string } }) {
  // Verifica se o parâmetro 'loaded' está presente e é 'true'.
  // Se não estiver, significa que o carregamento ainda não foi concluído,
  // então renderizamos a página de carregamento.
  if (searchParams.loaded !== "true") {
    return <LoadingPage />
  }

  // Se 'loaded' for 'true', significa que o carregamento já foi feito,
  // então renderizamos a página principal de upsell.
  return <UpsellPage />
}
