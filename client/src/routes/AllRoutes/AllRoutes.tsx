import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import UserProfile from "../../pages/UserProfile";
import PrivateRoutes from "../PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>

      <Route element={<PrivateRoutes />}>
        <Route path={"/resumo"} element={<UserProfile />}></Route>
      </Route>
    </Routes>
  );
}

export default AllRoutes;
