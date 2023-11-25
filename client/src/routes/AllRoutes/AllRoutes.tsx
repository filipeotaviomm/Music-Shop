import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import PrivateRoutes from "../PrivateRoutes";
import Anuncios from "../../components/Anuncios";
import Orders from "../../components/Orders";
import Payments from "../../components/Payments";
import Addresses from "../../components/Addresses";
import Resume from "../../components/Resume";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import ProfileTemplate from "../../components/ProfileTemplate";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>

      <Route path="/products/:id" element={<ProductPage />}></Route>

      <Route element={<PrivateRoutes />}>
        <Route
          path={"/resumo"}
          element={<ProfileTemplate children={<Resume />} />}
        >
          <Route
            path={"addresses"}
            element={<ProfileTemplate children={<Addresses />} />}
          />
          <Route
            path={"payments"}
            element={<ProfileTemplate children={<Payments />} />}
          />
          <Route
            path={"orders"}
            element={<ProfileTemplate children={<Orders />} />}
          />
          <Route
            path={"anuncios"}
            element={<ProfileTemplate children={<Anuncios />} />}
          />

          <Route
            path={"resumo"}
            element={<ProfileTemplate children={<Resume />} />}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
