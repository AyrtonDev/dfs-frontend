import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/login"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
