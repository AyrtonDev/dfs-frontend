import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/shared/components/ui/pagination"
import { useMovieList } from "../contexts/movies-list-context"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/components/ui/button"

type Props = {
  page: number | string
  totalPages: number | string
}

export const PaginationList = ({ page, totalPages }: Props) => {
  const { setPagination } = useMovieList()
  return (
    <Pagination>
      <PaginationContent>
        {Array.from({ length: Number(totalPages) }).map((_, i) => (
          <PaginationItem key={i}>
            <Button
              onClick={() => setPagination(i + 1)}
              disabled={i + 1 == page}
              size="icon"
              className="cursor-pointer"
              variant={i + 1 == page ? "default" : "outline"}
            >
              <PaginationLink href="#">{i + 1}</PaginationLink>
            </Button>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
