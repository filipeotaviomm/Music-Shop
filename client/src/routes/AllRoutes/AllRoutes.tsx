import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import PrivateRoutes from "../PrivateRoutes";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import ResumeRoutes from "../PrivateRoutes/ResumeRoutes";



function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>

      <Route path="/products/:id" element={<ProductPage />}></Route>

      <Route element={<PrivateRoutes />}>{ResumeRoutes()}</Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
