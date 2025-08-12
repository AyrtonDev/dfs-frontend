import { z } from "zod"

export const signUpFormSchema = z
  .object({
    name: z.string().min(4, "Nome tem que ter ao menos 4 caracteres"),
    email: z.email("E-mail invalído"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    passwordConfirmation: z.string().min(6, "Confirmação obrigatoria"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não são iguais",
    path: ["passwordConfirmation"],
  })

export type SignUpFormType = z.infer<typeof signUpFormSchema>
