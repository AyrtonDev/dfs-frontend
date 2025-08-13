import { ColumnLayout } from "@/shared/layouts/column-layout"
import type { MovieData } from "../../types/movies"
import { LoaderCircle } from "lucide-react"
import { formatDate } from "../../helpers/format-date"
import { ButtonBack } from "@/shared/components/button-back"

type Props = {
  movie: MovieData | null
}

export const MoviePresenter = ({ movie }: Props) => {
  return (
    <ColumnLayout>
      <ButtonBack path="/filmes" />
      {!!movie && (
        <div className="flex w-full justify-between">
          <div className="relative h-[600px] w-[45%] overflow-hidden rounded">
            <img
              src={movie.imageUrl}
              alt="imagem do filme"
              className="h-full w-auto object-cover"
            />
          </div>

          <div className="flex w-[45%] flex-col gap-4">
            <h1 className="text text-4xl font-bold">{movie.title}</h1>
            <h3 className="text-xl">
              <span className="font-bold">Titulo original:</span>{" "}
              {movie.originalTitle || "Não informado"}
            </h3>
            <p>
              <span className="font-bold">Descrição:</span>
              {movie.description || "Não informado"}
            </p>

            <span>Genêro: {movie.genre}</span>
            <span>Diretor: {movie.director || "Não informado"}</span>
            <span>Orçamento: {movie.budge || "Não informado"}</span>
            <span>Duração: {movie.duration ? `${movie.duration} minutos` : "Não informado"} </span>
            <span>
              Lançamento: {movie.releaseDate ? formatDate(movie.releaseDate) : "Não informado"}
            </span>
            <span>Adicionado ao site {formatDate(movie.createdAt)}</span>
            <span>Ultima vez atualizado {formatDate(movie.updatedAt)}</span>
          </div>
        </div>
      )}

      {!movie && (
        <div className="py-40">
          <LoaderCircle className="size-28 animate-spin opacity-30" />
        </div>
      )}
    </ColumnLayout>
  )
}
