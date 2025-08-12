import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"
import type { MoviesListServiceType } from "../types/param"

export const getMoviesService = async (filter: MoviesListServiceType = {}) => {
  try {
    const result = await api.post("/movies", filter)
    return result.data
  } catch (err) {
    const axiosError = err as AxiosError<{ error: string }>
    throw axiosError.response ? axiosError.response.data.error : "Algum problema aconteceu..."
  }
}
