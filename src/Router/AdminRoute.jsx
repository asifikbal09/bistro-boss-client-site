import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const [isAdmin,isAdminLoading] =useAdmin()
  console.log(isAdmin)
  const location = useLocation();

  if (loader || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin.admin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;