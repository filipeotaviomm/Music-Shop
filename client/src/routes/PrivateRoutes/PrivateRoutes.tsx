import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/types";

function PrivateRoutes() {
  const { token } = useUserContext() as IUserContext;

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
