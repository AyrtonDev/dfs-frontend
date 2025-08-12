import type { MoviesData } from "../../types/movies"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { Loader } from "lucide-react"
import { ColumnLayout } from "@/shared/layouts/column-layout"
import { TableComponent } from "../table"
import { ListSkeleton } from "../list-skeleton"

type Props = {
  movies: MoviesData | null
}

export const MoviesPresenter = ({ movies }: Props) => {
  return (
    <ColumnLayout>
      <ScrollArea>
        <div className="w-4xl flex flex-col gap-4">
          {!!movies && <TableComponent movies={movies.results} />}

          {!movies && <ListSkeleton />}
        </div>
      </ScrollArea>
    </ColumnLayout>
  )
}
