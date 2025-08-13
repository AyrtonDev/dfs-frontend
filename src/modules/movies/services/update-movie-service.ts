import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"
import type { FormMovieType } from "../schemas/form-movie"

export const updateMovieService = async (data: FormMovieType, token: string, id: string) => {
  try {
    const result = await api.put(`/movies/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result.data
  } catch (err) {
    const axiosError = err as AxiosError<{ error: string }>
    throw axiosError.response ? axiosError.response.data.error : "Algum problema aconteceu..."
  }
}
