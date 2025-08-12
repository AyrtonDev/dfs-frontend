import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/auth-context"
import type { BasicPropsType } from "../types/props"

export const PrivateRoute = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to="/login" replace />
}
