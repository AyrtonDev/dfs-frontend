import type { BasicPropsType } from "@/shared/types/props"
import { createContext, useContext, useEffect, useState } from "react"
import { defaultFilter, type FilterType } from "../schemas/filter"

type LoginContextType = {
  filters: FilterType | null
  setPagination: (page: number | string) => void
  setFilter: (filter: string, value: any) => void
  setSearchTerm: (term: string) => void
  clearFilter: () => void
}

const MovieListContext = createContext<LoginContextType | undefined>(undefined)

export const MovieListProvider = ({ children }: BasicPropsType) => {
  const [filters, setFilters] = useState<FilterType | null>(null)

  useEffect(() => {
    console.log(filters)
  }, [filters])

  const setFilter = (field: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      searchTerm: "",
      pagination: 1,
    }))
  }

  const setSearchTerm = (term: string) => {
    setFilters({
      searchTerm: term,
      pagination: 1,
    })
  }

  const setPagination = (page: number | string) => {
    setFilters((prev) => ({
      ...prev,
      pagination: Number(page),
    }))
  }

  const clearFilter = () => {
    setFilters(null)
  }

  return (
    <MovieListContext.Provider
      value={{ filters, clearFilter, setPagination, setFilter, setSearchTerm }}
    >
      {children}
    </MovieListContext.Provider>
  )
}

export const useMovieList = () => {
  const context = useContext(MovieListContext)
  if (!context) throw new Error("useMoviesList must used inside of the MovieListProvider")

  return context
}
