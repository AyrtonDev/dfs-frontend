import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"

export const uploadImageService = async (file: File, token: string) => {
  try {
    const formData = new FormData()
    formData.append("image", file)

    const result = await api.post("/upload-image", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result.data
  } catch (err) {
    const axiosError = err as AxiosError<{ error: string }>
    console.log(axiosError.response?.data)
    throw axiosError.response?.data
      ? axiosError.response.data?.error
      : "Algum problema aconteceu..."
  }
}
