import type { MoviesData } from "../../types/movies"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableRow } from "@/shared/components/ui/table"
import { Loader, PenIcon } from "lucide-react"
import { ColumnLayout } from "@/shared/layouts/column-layout"
import { Button } from "@/shared/components/ui/button"
import { formatDate } from "../../helpers/format-date"

type Props = {
  movies: MoviesData | null
}

export const MoviesPresenter = ({ movies }: Props) => {
  return (
    <ColumnLayout>
      <ScrollArea>
        <div className="w-4xl flex flex-col gap-4">
          {!!movies && (
            <Table>
              <TableBody>
                {movies.results.map((movie) => (
                  <TableRow key={movie.id}>
                    <TableCell>
                      <img src={movie.imageUrl} alt="imagem do filme" />
                    </TableCell>
                    <TableCell>
                      <span className="text-3xl font-bold">{movie.title}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>Gênero: {movie.genre}</span>
                        <span>Lançamento: {formatDate(movie.releaseDate)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="icon" variant="outline">
                        <PenIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {!movies && (
            <div>
              <Loader className="animate-spin" />
            </div>
          )}
        </div>
      </ScrollArea>
    </ColumnLayout>
  )
}
