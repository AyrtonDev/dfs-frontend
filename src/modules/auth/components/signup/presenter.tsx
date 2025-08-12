import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import type { SignUpFormType } from "../../schemas/signup"
import { type UseFormReturn, type SubmitHandler } from "react-hook-form"
import { Button } from "@/shared/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/components/ui/form"
import { Input } from "@/shared/components/ui/input"
import { CenteredLayout } from "@/shared/layouts/centered-layout"
import { Link } from "react-router-dom"

type Props = {
  form: UseFormReturn<SignUpFormType>
  submit: SubmitHandler<SignUpFormType>
}

export const SignUpPresenter = ({ form, submit }: Props) => {
  return (
    <CenteredLayout>
      <Card className="max:h-3xl w-80">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(submit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="João" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="teste@mail.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmação da senha</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="igual a senha" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Criar cadastro
              </Button>
            </form>
          </Form>

          <Link to="/login">
            <Button className="w-full" variant="outline">
              Voltar para Login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </CenteredLayout>
  )
}
