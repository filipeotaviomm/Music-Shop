import Resume from "../../../components/Resume/index.js";
import Addresses from "../../../components/Addresses/index.js";
import Payments from "../../../components/Payments/index.js";
import Orders from "../../../components/Orders/index.js";
import Anuncios from "../../../components/Anuncios/index.js";
import {Route} from "react-router-dom";
import ProfileTemplate from "../../../components/ProfileTemplate/index.js";

const routesConfig = [
  { path: "/resumo", component: <Resume /> },
  { path: "/resumo/addresses", component: <Addresses /> },
  { path: "/resumo/payments", component: <Payments /> },
  { path: "/resumo/orders", component: <Orders /> },
  { path: "/resumo/anuncios", component: <Anuncios /> },
  { path: "/resumo/resumo", component: <Resume /> },
];
function ResumeRoutes() {
  return routesConfig.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={<ProfileTemplate children={route.component} />}
    />
  ));
}

export default ResumeRoutes;
