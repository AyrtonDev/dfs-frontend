import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/auth-context"
import type { BasicPropsType } from "../types/props"

export const PublicRoute = () => {
  const { user } = useAuth()

  return user ? <Navigate to="/dashboard" replace /> : <Outlet />
}
