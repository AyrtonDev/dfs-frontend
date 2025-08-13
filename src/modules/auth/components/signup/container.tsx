import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signUpFormSchema, type SignUpFormType } from "../../schemas/signup"
import { SignUpPresenter } from "./presenter"
import { signUpService } from "../../services/signup-service"
import { useAuth } from "@/shared/contexts/auth-context"
import { toast } from "sonner"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SignUpContainer = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const signUpForm = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  })

  const handleSignUp = async ({ email, password, name, passwordConfirmation }: SignUpFormType) => {
    try {
      setLoading(true)
      const token = await signUpService({ email, password, name, passwordConfirmation })
      toast("Conta criada com sucesso")
      login(token)
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (err: any) {
      setLoading(false)
      toast(err)
    }
  }
  return <SignUpPresenter form={signUpForm} submit={handleSignUp} isLoading={loading} />
}
