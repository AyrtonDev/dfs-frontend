import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/auth-context"
import type { BasicPropsType } from "../types/props"

export const PrivateRoute = ({ children }: BasicPropsType) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}
