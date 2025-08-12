import { useEffect, useState } from "react"
import { MoviePresenter } from "./presenter"
import { useAuth } from "@/shared/contexts/auth-context"
import { useParams } from "react-router-dom"
import { getMovieService } from "../../services/movie-service"
import type { MovieData } from "../../types/movies"

export const MovieContainer = () => {
  const { user } = useAuth()
  const { id } = useParams<{ id: string }>()
  const [movie, setMovie] = useState<MovieData | null>(null)

  useEffect(() => {
    if (user && id) {
      fetchMovie(user, id)
    }
  }, [])

  const fetchMovie = async (token: string, movieId: string) => {
    const movie = await getMovieService(token, movieId)

    setMovie(movie)
  }

  return <MoviePresenter movie={movie} />
}
