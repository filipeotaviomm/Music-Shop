import GlobalStyles from "./styled-components/GlobalStyles.tsx";
import Template from "./components/Template";
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Template>
        <AllRoutes />
      </Template>
      <GlobalStyles />
      <ToastContainer position="bottom-right" autoClose={5 * 1000} />
    </>
  );
}

export default App;
