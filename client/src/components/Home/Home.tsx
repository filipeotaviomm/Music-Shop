import LogoCategories from "./LogoCategories";
import HomeCards from "../HomeCards";
import AllProducts from "../AllProducts";

function Home() {
  return (
    <>
      <LogoCategories />
      <AllProducts heading="🔥 Produtos em alta 🔥" />
      <HomeCards />
    </>
  );
}

export default Home;
