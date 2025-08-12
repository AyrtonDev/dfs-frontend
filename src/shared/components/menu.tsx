import { useEffect, useState } from "react"
import { useAuth } from "../contexts/auth-context"
import { GetUserService } from "../services/get-user-service"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/shared/components/ui/dropdown-menu"
import { Button } from "@/shared/components/ui/button"
import { DoorOpen } from "lucide-react"

export const Menu = () => {
  const { user, logout } = useAuth()
  const [name, setName] = useState("")

  useEffect(() => {
    if (user) {
      fetchUser(user)
    }
  }, [])

  const fetchUser = async (token: string) => {
    const userName = await GetUserService(token)
    setName(userName)
  }

  const handleLogout = () => {
    logout()
    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="absolute right-10 top-4">
          Ola, {name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-10 justify-center">
        <Button className="text-red-500" variant="outline" onClick={handleLogout}>
          Sair
          <DoorOpen />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
