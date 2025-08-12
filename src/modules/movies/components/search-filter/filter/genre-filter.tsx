import { getGenresService } from "@/modules/movies/services/genres-list-service"
import { useAuth } from "@/shared/contexts/auth-context"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/components/ui/select"
import { useEffect, useState } from "react"

type Props = {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>>
}

export const GenreFilter = ({ data, setData }: Props) => {
  const { user } = useAuth()
  const [genres, setGenres] = useState<string[] | never[]>([])
  useEffect(() => {
    if (user) {
      fetchGenres(user)
    }
  }, [])

  const fetchGenres = async (token: string) => {
    const genres = await getGenresService(token)
    setGenres(genres)
  }

  const handleSelect = (e: string) => {
    setData((prev: any) => ({
      ...prev,
      genre: e,
    }))
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-light">Genêro</span>
      <div className="flex items-center justify-between">
        <Select value={data.genre} onValueChange={handleSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um genêro" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((genre) => (
              <SelectItem value={genre} key={genre}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
