import { Route, Routes } from "react-router-dom";
import UserProfile from "../../pages/UserProfile";
import PrivateRoutes from "../PrivateRoutes";
import Anuncios from "../../components/Anuncios";
import Orders from "../../components/Orders";
import Payments from "../../components/Payments";
import Addresses from "../../components/Addresses";
import Resume from "../../components/Resume";
import Wishlist from "../../components/Wishlist";
import NotFound from "../../pages/NotFound";
import HomePage from "../../pages/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />}></Route>

      <Route element={<PrivateRoutes />}>
        {/*REFATORAR SEMANA QUE VEM*/}
        <Route
          path={"/resumo"}
          element={
            <UserProfile>
              <Resume />
            </UserProfile>
          }
        />
        <Route
          path={"/resumo/addresses"}
          element={
            <UserProfile>
              <Addresses />
            </UserProfile>
          }
        />
        <Route
          path={"/resumo/payments"}
          element={
            <UserProfile>
              <Payments />
            </UserProfile>
          }
        />
        <Route
          path={"/resumo/orders"}
          element={
            <UserProfile>
              <Orders />
            </UserProfile>
          }
        />
        <Route
          path={"/resumo/anuncios"}
          element={
            <UserProfile>
              <Anuncios />
            </UserProfile>
          }
        />
        <Route
          path={"/resumo/wishlist"}
          element={
            <UserProfile>
              <Wishlist />
            </UserProfile>
          }
        />
      </Route>

        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
