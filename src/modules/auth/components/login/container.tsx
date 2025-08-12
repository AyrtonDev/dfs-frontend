import { useForm } from "react-hook-form"
import { loginFormSchema, type LoginFormType } from "../../schemas/login"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginPresenter } from "./presenter"
import { loginService } from "../../services/login-service"
import { useAuth } from "@/shared/contexts/auth-context"
import { toast } from "sonner"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginContainer = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const loginForm = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleLogin = async ({ email, password }: LoginFormType) => {
    try {
      setLoading(true)
      const token = await loginService({ email, password })
      toast("Login feito com sucesso")
      login(token)
      navigate("/filmes")
    } catch (err: any) {
      setLoading(false)
      toast(err)
    }
  }

  return <LoginPresenter form={loginForm} submit={handleLogin} isLoading={loading} />
}
