import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.email("E-mail invalído"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
})

export type LoginFormType = z.infer<typeof loginFormSchema>
