import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { FormMovieType } from "../../schemas/form-movie"
import { getMovieService } from "../../services/movie-service"
import { EditMoviePresenter } from "./presenter"
import { useAuth } from "@/shared/contexts/auth-context"
import { useForm } from "react-hook-form"
import { updateMovieService } from "../../services/update-movie-service"
import { toast } from "sonner"

export const EditMovieContainer = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { id } = useParams<{ id: string }>()
  const [movie, setMovie] = useState<FormMovieType | null>(null)

  useEffect(() => {
    if (user && id) {
      fetchMovie(user, id)
    }
  }, [])

  const form = useForm<FormMovieType>({
    defaultValues: movie ?? {},
  })

  const setImageUrl = (url: string) => {
    form.setValue("imageUrl", url)
  }

  const imageUrl = form.watch("imageUrl")

  useEffect(() => {
    if (movie) {
      form.reset(movie)
    }
  }, [movie])

  const fetchMovie = async (token: string, movieId: string) => {
    const movie = await getMovieService(token, movieId)

    setMovie(movie)
  }

  const updateMovie = async (data: FormMovieType) => {
    if (user && id) {
      const result = await updateMovieService(data, user, id)

      toast(result.message)
      navigate("/filmes")
    }
  }
  return (
    <EditMoviePresenter
      form={form}
      submit={updateMovie}
      isLoading={false}
      setImageUrl={setImageUrl}
      imageUrl={imageUrl}
    />
  )
}
