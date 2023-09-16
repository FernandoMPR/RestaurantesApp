import { Navigate, Outlet } from "react-router-dom";


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
