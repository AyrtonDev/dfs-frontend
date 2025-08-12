import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "@/modules/auth/page/login"
import { AuthProvider } from "./shared/contexts/auth-context"
import { SignUpPage } from "./modules/auth/page/signup"
import { PublicRoute } from "./shared/components/public-route"

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/cadastro"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
