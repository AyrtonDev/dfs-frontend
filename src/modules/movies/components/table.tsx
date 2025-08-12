import { Button } from "@/shared/components/ui/button"
import { Table, TableBody, TableRow, TableCell } from "@/shared/components/ui/table"
import { Eye, PenIcon } from "lucide-react"
import { formatDate } from "../helpers/format-date"
import type { MoviesItem } from "../types/movies"
import { Link } from "react-router-dom"

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
                <Link to={`/filmes/edicao/${movie.id}`}>
                  <Button size="icon" variant="outline" className="cursor-pointer">
                    <PenIcon />
                  </Button>
                </Link>
              </TableCell>
              <TableCell>
                <Link to={`/filmes/${movie.id}`}>
                  <Button size="icon" variant="outline" className="cursor-pointer">
                    <Eye />
                  </Button>
                </Link>
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
