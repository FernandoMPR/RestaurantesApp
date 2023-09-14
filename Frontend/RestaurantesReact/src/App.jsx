import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignupPage from './pages/Registro'
import SigninPage from "./pages/Login"
import Home from "./pages/home"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
