export type MoviesItem = {
  id: string
  title: string
  genre: string
  releaseDate: Date
  imageUrl: string
}

export type MoviesData = {
  page: number
  totalPages: number
  results: MoviesItem[]
}

export type MovieData = {
  id: string
  title: string
  originalTitle: string | undefined
  imageUrl: string | undefined
  description: string | undefined
  releaseDate: string | undefined
  duration: number | undefined
  genre: string
  director: string | undefined
  createdAt: string
  updatedAt: string
}
