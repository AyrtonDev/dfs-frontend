import type { MoviesData } from "../../types/movies"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { Loader, Plus } from "lucide-react"
import { ColumnLayout } from "@/shared/layouts/column-layout"
import { TableComponent } from "../table"
import { ListSkeleton } from "../list-skeleton"
import { PaginationList } from "../pagination-list"
import { Button } from "@/shared/components/ui/button"
import { SearchFilterComponent } from "../search-filter"

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

            <Button>
              <Plus />
              Adiciona filme
            </Button>
          </div>
          {!!movies && <TableComponent movies={movies.results} />}
          {!!movies && <PaginationList />}

          {!movies && <ListSkeleton />}
        </div>
      </ScrollArea>
    </ColumnLayout>
  )
}
