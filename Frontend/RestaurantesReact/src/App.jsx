import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Registro";
import SigninPage from "./pages/Login";
import CrearRestaurante from "./pages/newRestaurante";
import EditarRestaurante from "./pages/actualizarRestaurante";
import ProtectedRoute from "./components/ProtectRutas";
import { useState, useEffect } from "react";
import Home from "./pages/home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //COMPROBACION DE USUARIO LOGEADO
  const canActivate = () => {
    const user = localStorage.getItem("user");
    return user !== null;
  };

  //CERRAR SESION
  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  //RUTAS Y RUTAS PROTEGIDAS
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                canActivate={canActivate}
                handleLogout={handleLogout}
              />
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route
            path="/nuevo-restaurante"
            element={
              <ProtectedRoute canActivate={canActivate}>
                <CrearRestaurante />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editar-restaurante/:id"
            element={
              <ProtectedRoute canActivate={canActivate}>
                <EditarRestaurante />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
