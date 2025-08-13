import { ButtonBack } from "@/shared/components/button-back"
import { Card } from "@/shared/components/ui/card"
import { ColumnLayout } from "@/shared/layouts/column-layout"

export const EditMoviePresenter = () => {
  return (
    <ColumnLayout>
      <ButtonBack path="/filmes" />

      <span className="mb-8 text-2xl font-bold">Registrar Filme</span>
      <Card className="w-1/2 self-center p-4"></Card>
    </ColumnLayout>
  )
}
