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
