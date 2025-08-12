import { Input } from "@/shared/components/ui/input"
import { useEffect, useState, type ChangeEvent } from "react"
import { useMovieList } from "../../contexts/movies-list-context"

export const SearchComponent = () => {
  const { setSearchTerm } = useMovieList()
  const [term, setTerm] = useState("")
  const [debouncedTerm, setDebouncedTerm] = useState(term)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTerm(term)
    }, 500)

    return () => clearTimeout(timeout)
  }, [term])

  useEffect(() => {
    setSearchTerm(debouncedTerm)
  }, [debouncedTerm])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTerm(value)
  }

  return (
    <div className="w-80 flex-1">
      <Input
        className="h-full w-full"
        value={term}
        onChange={handleInput}
        placeholder="Pesquise pelos titulos dos filmes..."
      />
    </div>
  )
}
