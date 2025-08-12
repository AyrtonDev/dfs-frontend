import { Popover, PopoverTrigger, PopoverContent } from "@/shared/components/ui/popover"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Calendar } from "@/shared/components/ui/calendar"

type Props = {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>>
}

export const ReleaseDateFilter = ({ data, setData }: Props) => {
  const handleDateRange = (range: "from" | "to", e: Date | undefined) => {
    setData((prev: any) => ({
      ...prev,
      release: {
        ...prev.release,
        [range]: e,
      },
    }))
  }
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-light">Lançamento</span>
      <div className="flex items-center justify-between">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-start"
              className="w-[180px] justify-between font-normal"
            >
              {data.release?.from ? data.release.from.toLocaleDateString() : <span>De</span>}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={data.release?.from}
              captionLayout="dropdown"
              onSelect={(date) => handleDateRange("from", date)}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-end"
              className="w-[180px] justify-between font-normal"
            >
              {data.release?.to ? data.release.to.toLocaleDateString() : <span>Até</span>}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={data.release?.to}
              captionLayout="dropdown"
              onSelect={(date) => handleDateRange("to", date)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
