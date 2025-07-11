import { Navigate } from "react-router-dom";
import { useUser } from "../UserContext";

const AdminRoute = ({ children }) => {
  const { user } = useUser();

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
