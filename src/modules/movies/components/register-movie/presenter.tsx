import { ButtonBack } from "@/shared/components/button-back"
import { Card } from "@/shared/components/ui/card"
import { ColumnLayout } from "@/shared/layouts/column-layout"
import type { UseFormReturn, SubmitHandler } from "react-hook-form"
import type { FormMovieType } from "../../schemas/form-movie"
import { FormMovie } from "../form-movie"

type Props = {
  form: UseFormReturn<FormMovieType>
  submit: SubmitHandler<FormMovieType>
  setImageUrl: (url: string) => void
  isLoading: boolean
}

export const RegisterMoviePresenter = ({ form, submit, isLoading, setImageUrl }: Props) => {
  return (
    <ColumnLayout>
      <ButtonBack path="/filmes" />

      <span className="mb-8 text-2xl font-bold">Registrar Filme</span>
      <Card className="w-1/2 self-center p-4">
        <FormMovie form={form} submit={submit} isLoading={isLoading} setImageUrl={setImageUrl} />
      </Card>
    </ColumnLayout>
  )
}
