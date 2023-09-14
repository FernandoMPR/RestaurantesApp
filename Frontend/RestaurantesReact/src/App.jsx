import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignupPage from './pages/Registro'
import SigninPage from "./pages/Login"
import Home from "./pages/home"
import CrearRestaurante from "./pages/newRestaurante"
import EditarRestaurante from "./pages/actualizarRestaurante"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
      <Route path="/nuevo-restaurante" element={<CrearRestaurante />} />
      <Route path="/editar-restaurante/:id" element={<EditarRestaurante />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
