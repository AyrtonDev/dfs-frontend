import type { LoginParamType } from "@/modules/login/types/param"
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

type Props = {
  form: UseFormReturn<LoginParamType>
  submit: SubmitHandler<LoginParamType>
}

export const LoginPresenter = ({ form, submit }: Props) => {
  return (
    <CenteredLayout>
      <Card>
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

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </CenteredLayout>
  )
}
