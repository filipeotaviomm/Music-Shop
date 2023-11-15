import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import { IContext } from "../../types/types";

function PrivateRoutes() {
  const { token } = useUserContext() as IContext;

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
