import type { MoviesData } from "../../types/movies"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { Plus } from "lucide-react"
import { ColumnLayout } from "@/shared/layouts/column-layout"
import { TableComponent } from "../table"
import { ListSkeleton } from "../list-skeleton"
import { PaginationList } from "../pagination-list"
import { Button } from "@/shared/components/ui/button"
import { SearchFilterComponent } from "../search-filter"
import { Link } from "react-router-dom"

type Props = {
  movies: MoviesData | null
}

export const MoviesPresenter = ({ movies }: Props) => {
  return (
    <ColumnLayout>
      <ScrollArea>
        <div className="w-4xl flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <SearchFilterComponent />

            <Link to="/filmes/registro">
              <Button>
                <Plus />
                Adiciona filme
              </Button>
            </Link>
          </div>
          {!!movies && <TableComponent movies={movies.results} />}
          {!!movies && <PaginationList page={movies.page} totalPages={movies.totalPages} />}

          {!movies && <ListSkeleton />}
        </div>
      </ScrollArea>
    </ColumnLayout>
  )
}
