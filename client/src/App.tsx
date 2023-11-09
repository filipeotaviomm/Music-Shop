import GlobalStyles from "./styled-components/GlobalStyles.tsx";
import Template from "./components/Template";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Template>
        <AllRoutes />
      </Template>
      <GlobalStyles />
    </>
  );
}

export default App;
