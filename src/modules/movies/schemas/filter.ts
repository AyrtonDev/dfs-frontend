import z from "zod"

export const filterSchema = z
  .object({
    duration: z
      .object({
        min: z.string().optional(),
        max: z.string().optional(),
      })
      .optional(),
    releaseDate: z
      .object({
        start: z.string().optional(),
        end: z.string().optional(),
      })
      .optional(),
    genre: z.string().optional(),
    searchTerm: z.string().optional(),
    pagination: z.coerce.number().optional(),
  })
  .optional()

export type FilterType = z.infer<typeof filterSchema>
