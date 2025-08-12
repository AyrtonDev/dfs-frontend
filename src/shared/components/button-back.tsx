import { ArrowLeft } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router-dom"

type Props = {
  path: string
}

export const ButtonBack = ({ path }: Props) => {
  return (
    <Link to={path} className="absolute">
      <Button>
        <ArrowLeft />
      </Button>
    </Link>
  )
}
