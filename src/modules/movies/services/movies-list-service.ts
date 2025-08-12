import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"
import type { FilterType } from "../schemas/filter"

export const getMoviesService = async (filter: FilterType | null) => {
  try {
    const result = await api.post("/movies", filter ? filter : {})
    return result.data
  } catch (err) {
    const axiosError = err as AxiosError<{ error: string }>
    throw axiosError.response ? axiosError.response.data.error : "Algum problema aconteceu..."
  }
}
