import { api } from "@/shared/config/api"
import type { AxiosError } from "axios"
import type { SignUpFormType } from "../schemas/signup"

export const loginService = async (body: SignUpFormType) => {
  try {
    const result = await api.post("/signup", body)
    return result.data.token
  } catch (err) {
    const axiosError = err as AxiosError<{ error: string }>
    throw axiosError.response ? axiosError.response.data.error : "Algum problema aconteceu..."
  }
}
