import { MoviesContainer } from "../components/movies-list/container"
import { MovieListProvider } from "../contexts/movies-list-context"

export const MoviesPage = () => {
  return (
    <MovieListProvider>
      <MoviesContainer />
    </MovieListProvider>
  )
}
