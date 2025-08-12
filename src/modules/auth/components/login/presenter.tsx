import type { LoginParamType } from "@/modules/auth/types/param"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form"
import { Input } from "@/shared/components/ui/input"
import { CenteredLayout } from "@/shared/layouts/centered-layout"
import type { SubmitHandler, UseFormReturn } from "react-hook-form"
import { Link } from "react-router-dom"
import { LoaderCircle } from "lucide-react"

type Props = {
  form: UseFormReturn<LoginParamType>
  submit: SubmitHandler<LoginParamType>
  isLoading: boolean
}

export const LoginPresenter = ({ form, submit, isLoading }: Props) => {
  return (
    <CenteredLayout>
      <Card className="max:h-2xl w-80">
        <CardHeader>Login</CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(submit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite seu E-mail" />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite sua senha" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <LoaderCircle className="animate-spin" /> : "Login"}
              </Button>

              <Link className="text-center underline" to="/cadastro">
                Cadastro
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </CenteredLayout>
  )
}
