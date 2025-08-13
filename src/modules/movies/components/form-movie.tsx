import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/components/ui/form"
import { Input } from "@/shared/components/ui/input"
import { CalendarIcon, LoaderCircle } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import type { SubmitHandler, UseFormReturn } from "react-hook-form"
import { Textarea } from "@/shared/components/ui/textarea"
import { cn } from "@/shared/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover"
import { Calendar } from "@/shared/components/ui/calendar"
import type { FormMovieType } from "../schemas/form-movie"
import { formatDate } from "../helpers/format-date"
import { NumericFormat } from "react-number-format"
import { ImageUploadModal } from "./select-image"

type Props = {
  form: UseFormReturn<FormMovieType>
  submit: SubmitHandler<FormMovieType>
  setImageUrl: (url: string) => void
  isLoading: boolean
}

export const FormMovie = ({ form, submit, isLoading, setImageUrl }: Props) => {
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(submit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Homem Aranha" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="originalTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título Original</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Spider-man" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageUploadModal setImageUrl={setImageUrl} />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="releaseDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lançamento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        <span>{formatDate(field.value)}</span>
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orçamento</FormLabel>
              <FormControl>
                <NumericFormat
                  {...field}
                  placeholder="R$ 0.000,00"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$ "
                  decimalScale={2}
                  fixedDecimalScale
                  allowNegative={false}
                  className="rounded-lg border p-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duração (em minutos)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="30" type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genêro do filme</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ação" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="director"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diretor</FormLabel>
              <FormControl>
                <Input {...field} placeholder="James Cameron" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? <LoaderCircle className="animate-spin" /> : "Criar cadastro"}
        </Button>
      </form>
    </Form>
  )
}
