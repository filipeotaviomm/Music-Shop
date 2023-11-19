import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import ProductPage from "../../pages/ProductPage";
import UserProfile from "../../pages/UserProfile";
import PrivateRoutes from "../PrivateRoutes";
import Anuncios from "../../components/Anuncios";
import Orders from "../../components/Orders";
import Payments from "../../components/Payments";
import Addresses from "../../components/Addresses";
import Resume from "../../components/Resume";
import Wishlist from "../../components/Wishlist";
import NotFound from "../../pages/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>

      <Route path="/productPage" element={<ProductPage />} />

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
