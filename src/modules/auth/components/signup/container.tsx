import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signUpFormSchema, type SignUpFormType } from "../../schemas/signup"
import { SignUpPresenter } from "./presenter"

export const SignUpContainer = () => {
  const signUpForm = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  })

  const handleSignUp = ({ email, password, name, passwordConfirmation }: SignUpFormType) => {
    console.log(email, password, name, passwordConfirmation)
  }
  return <SignUpPresenter form={signUpForm} submit={handleSignUp} />
}
