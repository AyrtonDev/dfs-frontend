import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"

export const getMovieService = async (token: string, id: string) => {
  try {
    const result = await api.get(`/movies/${id}`, {
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
