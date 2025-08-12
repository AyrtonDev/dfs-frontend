import { api } from "@/shared/config/api"
import type { LoginFormType } from "../schemas/login"
import type { AxiosError } from "axios"

export const loginService = async (body: LoginFormType) => {
  try {
    const result = await api.post("/login", body)
    return result.data.token
  } catch (err) {
    const axiosError = err as AxiosError<{ error: string }>
    throw axiosError.response ? axiosError.response.data.error : "Algum problema aconteceu..."
  }
}
