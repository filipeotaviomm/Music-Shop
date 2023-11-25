import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import UserProfile from "../../pages/UserProfile";
import PrivateRoutes from "../PrivateRoutes";
import Anuncios from "../../components/Anuncios";
import Orders from "../../components/Orders";
import Payments from "../../components/Payments";
import Addresses from "../../components/Addresses";
import Resume from "../../components/Resume";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>

      <Route path="/products/:id" element={<ProductPage />} />

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
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
