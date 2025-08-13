import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "@/modules/auth/page/login"
import { AuthProvider } from "@/shared/contexts/auth-context"
import { SignUpPage } from "@/modules/auth/page/signup"
import { PublicRoute } from "@/shared/components/public-route"
import { Toaster } from "@/shared/components/ui/sonner"
import { PrivateRoute } from "./shared/components/private-route"
import { MoviesPage } from "./modules/movies/pages/movies-list"
import { MoviePage } from "./modules/movies/pages/movie"
import { RegisterMoviePage } from "./modules/movies/pages/register-movie"
import { EditMoviePage } from "./modules/movies/pages/edit-movie"

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/filmes" element={<MoviesPage />} />
            <Route path="/filmes/:id" element={<MoviePage />} />
            <Route path="/filmes/registro" element={<RegisterMoviePage />} />
            <Route path="/filmes/edit/:id" element={<EditMoviePage />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  )
}
