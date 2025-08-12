import { MoviesPresenter } from "./presenter"
import { getMoviesService } from "../../services/movies-list-service"
import { useEffect, useState } from "react"
import type { MoviesData } from "../../types/movies"
import { useMovieList } from "../../contexts/movies-list-context"
import { useAuth } from "@/shared/contexts/auth-context"

export const MoviesContainer = () => {
  const { user } = useAuth()
  const { filters } = useMovieList()
  const [movies, setMovies] = useState<MoviesData | null>(null)

  useEffect(() => {
    if (user) {
      fetchMovies(user)
    }
  }, [filters])

  const fetchMovies = async (token: string) => {
    try {
      setMovies(null)
      const movies = await getMoviesService(filters, token)
      setMovies(movies)
    } catch (err) {
      console.log(err)
    }
  }

  return <MoviesPresenter movies={movies} />
}
