import { ButtonBack } from "@/shared/components/button-back"
import { Card } from "@/shared/components/ui/card"
import { ColumnLayout } from "@/shared/layouts/column-layout"
import { FormMovie } from "../form-movie"
import type { UseFormReturn, SubmitHandler } from "react-hook-form"
import type { FormMovieType } from "../../schemas/form-movie"

type Props = {
  form: UseFormReturn<FormMovieType>
  submit: SubmitHandler<FormMovieType>
  setImageUrl: (url: string) => void
  isLoading: boolean
  imageUrl: string
}

export const EditMoviePresenter = ({ form, isLoading, setImageUrl, submit, imageUrl }: Props) => {
  return (
    <ColumnLayout>
      <ButtonBack path="/filmes" />

      <span className="mb-8 text-2xl font-bold">Editar Filme</span>
      <Card className="w-1/2 self-center p-4">
        <FormMovie
          form={form}
          submit={submit}
          isLoading={isLoading}
          setImageUrl={setImageUrl}
          isUpdate
          imageUrl={imageUrl}
        />
      </Card>
    </ColumnLayout>
  )
}
