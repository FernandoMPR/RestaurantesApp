import { Navigate, Outlet } from "react-router-dom";

//PROTECCION DE RUTAS SI ES USER ESTA LOGEADO
const ProtectedRoute = ({ canActivate , children, redirec="/signin" }) => {
  const isAuthenticated = canActivate();
  if (!isAuthenticated) {
    console.log(isAuthenticated)
    return <Navigate to={redirec} replace />; 
  }
  console.log(isAuthenticated)
  return children;
};
export default ProtectedRoute;
