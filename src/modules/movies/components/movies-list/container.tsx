import { toast } from "sonner"
import { MoviesPresenter } from "./presenter"
import { getMoviesService } from "../../services/movies-list-service"
import { useEffect, useState } from "react"
import type { MoviesData } from "../../types/movies"

export const MoviesContainer = () => {
  const [movies, setMovies] = useState<MoviesData | null>(null)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    try {
      setMovies(null)
      const movies = await getMoviesService()
      setMovies(movies)
    } catch (err) {
      console.log(err)
    }
  }

  return <MoviesPresenter movies={movies} />
}
