import { Button } from "@/shared/components/ui/button"
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog"
import { Filter } from "lucide-react"
import { DurationFilter } from "./filter/duration-filter"
import { useState } from "react"
import { useMovieList } from "../../contexts/movies-list-context"
import { ReleaseDateFilter } from "./filter/release-date-filter"
import { GenreFilter } from "./filter/genre-filter"

export const FilterComponent = () => {
  const defaultValues = {
    duration: {},
    release: {},
    genre: "",
  }
  const { clearFilter, setFilter } = useMovieList()
  const [filtersWrap, setFiltersWrap] = useState<typeof defaultValues>(defaultValues)

  const handleApplyFilter = () => {
    setFilter(filtersWrap)
  }

  const handleClearFilter = () => {
    clearFilter()
    setFiltersWrap(defaultValues)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Filter /> Filtro
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filtro</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-4">
            <DurationFilter data={filtersWrap} setData={setFiltersWrap} />
            <ReleaseDateFilter data={filtersWrap} setData={setFiltersWrap} />
            <GenreFilter data={filtersWrap} setData={setFiltersWrap} />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleClearFilter}>
              Limpar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" onClick={handleApplyFilter}>
              Aplicar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
