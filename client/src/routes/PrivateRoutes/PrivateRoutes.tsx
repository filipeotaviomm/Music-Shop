import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import {IUserContext} from "../../types/user";


function PrivateRoutes() {
  const { token } = useUserContext() as IUserContext;

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
