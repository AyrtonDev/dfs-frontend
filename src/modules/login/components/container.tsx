import { useForm } from "react-hook-form"
import { loginFormSchema, type LoginFormType } from "../schemas/login"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginPresenter } from "./presenter"

export const LoginContainer = () => {
  const loginForm = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleLogin = ({ email, password }: LoginFormType) => {
    console.log(email, password)
  }

  return <LoginPresenter form={loginForm} submit={handleLogin} />
}
