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

export const FilterComponent = () => {
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
          <div className="grid flex-1 gap-2">
            <DurationFilter />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Limpar
            </Button>
          </DialogClose>
          <Button type="button">Aplicar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
