export type MoviesListServiceType = {
  duration?: {
    min?: number
    max?: number
  }
  releaseDate?: {
    start: string
    end: string
  }
  genre?: string
  searchTerm?: string
  pagination?: number
}
