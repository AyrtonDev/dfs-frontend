import { CenteredLayout } from "@/shared/layouts/centered-layout"
import type { MoviesData } from "../../types/movies"

type Props = {
  movies: MoviesData | null
}

export const MoviesPresenter = ({ movies }: Props) => {
  return (
    <CenteredLayout>
      <div className="flex flex-col gap-4"></div>
    </CenteredLayout>
  )
}
