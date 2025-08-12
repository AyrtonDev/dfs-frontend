import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "@/modules/login/page/login"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
