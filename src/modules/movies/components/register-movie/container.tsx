import { useForm } from "react-hook-form"
import { formMovieSchema, type FormMovieType } from "../../schemas/form-movie"
import { RegisterMoviePresenter } from "./presenter"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerMovieService } from "../../services/register-movie-service"
import { useAuth } from "@/shared/contexts/auth-context"

export const RegisterMovieContainer = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const registerMovieForm = useForm<FormMovieType>({
    resolver: zodResolver(formMovieSchema),
    defaultValues: {
      title: "",
      originalTitle: "",
      budge: "",
      duration: "",
      director: "",
      genre: "",
      description: "",
      releaseDate: new Date(),
      imageUrl: "",
    },
  })

  const setImageUrl = (url: string) => {
    registerMovieForm.setValue("imageUrl", url)
  }

  const handleRegisterMovie = async (data: FormMovieType) => {
    try {
      if (user) {
        setLoading(true)
        await registerMovieService(data, user)
        toast("Filme registrado com sucesso.")
        navigate("/filmes")
      }
    } catch (err: any) {
      setLoading(false)
      toast(err)
    }
  }
  return (
    <RegisterMoviePresenter
      form={registerMovieForm}
      submit={handleRegisterMovie}
      isLoading={loading}
      setImageUrl={setImageUrl}
    />
  )
}
