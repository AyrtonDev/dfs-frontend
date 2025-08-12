import type { FilterType } from "@/modules/movies/schemas/filter"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/components/ui/select"
import type { SetStateAction } from "react"

type Props = {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>>
}

export const DurationFilter = ({ data, setData }: Props) => {
  const handleSelect = (field: "min" | "max", value: string) => {
    setData((prev: any) => ({
      ...prev,
      duration: {
        ...prev.duration,
        [field]: value,
      },
    }))
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-light">Duração (em minutos)</span>
      <div className="flex items-center justify-between">
        <Select
          value={data.duration?.min}
          onValueChange={(e) => {
            handleSelect("min", e)
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30">30 minutos</SelectItem>
            <SelectItem value="60">60 minutos</SelectItem>
            <SelectItem value="90">90 minutos</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={data?.duration?.max}
          onValueChange={(e) => {
            handleSelect("max", e)
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="60">60 minutos</SelectItem>
            <SelectItem value="90">90 minutos</SelectItem>
            <SelectItem value="120">120 minutos</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
