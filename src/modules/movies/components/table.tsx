import { Button } from "@/shared/components/ui/button"
import { Table, TableBody, TableRow, TableCell } from "@/shared/components/ui/table"
import { PenIcon } from "lucide-react"
import { formatDate } from "../helpers/format-date"
import type { MoviesItem } from "../types/movies"

type Props = {
  movies: MoviesItem[]
}

export const TableComponent = ({ movies }: Props) => {
  if (movies.length > 0) {
    return (
      <Table>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>
                <div className="relative h-48 overflow-hidden rounded">
                  <img
                    src={movie.imageUrl}
                    alt="imagem do filme"
                    className="h-full w-auto object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>
                <span className="text-2xl font-bold">{movie.title}</span>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-xl">Gênero: {movie.genre}</span>
                  <span className="text-xl">Lançamento: {formatDate(movie.releaseDate)}</span>
                </div>
              </TableCell>
              <TableCell>
                <Button size="icon" variant="outline" className="cursor-pointer">
                  <PenIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  return (
    <div className="h-48 w-full">
      <span className="text-4xl font-bold">Não há filmes ou não foram encontrados!</span>
    </div>
  )
}
