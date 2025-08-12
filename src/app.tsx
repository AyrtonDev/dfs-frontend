import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "@/modules/auth/page/login"
import { AuthProvider } from "./shared/contexts/auth-context"

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
