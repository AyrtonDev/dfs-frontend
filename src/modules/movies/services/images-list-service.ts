import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"

export const getImagesService = async (token: string) => {
  try {
    const result = await api.get("/images", {
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
