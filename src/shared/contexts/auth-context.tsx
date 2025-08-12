import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type LoginContextType = {
  user: string | null
  login: (credentials: string) => void
  logout: () => void
}

const AuthContext = createContext<LoginContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      try {
        setUser(token)
      } catch {
        logout()
      }
    }
  }, [])

  const login = (credentials: string) => {
    localStorage.setItem("token", credentials)
  }

  const logout = () => {
    localStorage.removeItem("token")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useLogin must used inside of the LoginProvider")

  return context
}
