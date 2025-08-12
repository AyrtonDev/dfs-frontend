import { toast } from "sonner"
import { MoviesPresenter } from "./presenter"
import { getMoviesService } from "../../services/movies-list-service"
import { useEffect, useState } from "react"
import type { MoviesData } from "../../types/movies"
import { useMovieList } from "../../contexts/movies-list-context"

export const MoviesContainer = () => {
  const { filters } = useMovieList()
  const [movies, setMovies] = useState<MoviesData | null>(null)

  useEffect(() => {
    fetchMovies()
  }, [filters])

  const fetchMovies = async () => {
    try {
      setMovies(null)
      const movies = await getMoviesService(filters)
      setMovies(movies)
    } catch (err) {
      console.log(err)
    }
  }

  return <MoviesPresenter movies={movies} />
}
