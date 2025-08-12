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
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
