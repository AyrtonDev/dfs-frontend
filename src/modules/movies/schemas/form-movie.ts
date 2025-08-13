import z from "zod"

export const formMovieSchema = z.object({
  title: z.string().min(4, "Titulo obrigatorio"),
  originalTitle: z.string().optional(),
  imageUrl: z.url(),
  description: z.string().optional(),
  releaseDate: z.date("Data de lançamento obrigatoria"),
  duration: z.string().optional(),
  budge: z.string().optional(),
  genre: z.string().min(4, "Genêro obrigratorio"),
  director: z.string().optional(),
})

export type FormMovieType = z.infer<typeof formMovieSchema>
