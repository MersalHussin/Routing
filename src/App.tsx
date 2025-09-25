import { useState } from "react";
import NavBar from "./components/NavBar";
import Aboutus from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import HooksPage from "./pages/HooksPage";

function App() {
  const [page,setPage] = useState<"about" | "home" | "products" | "useEffect">("home")
  return (
    <>
    <div className="flex flex-col justifhttp://localhost:5173/y-center items-center" >
      <h1 className="text-2xl text-black bg-white" >
        Component LifeCicycle (Class)
      </h1>
        <NavBar setPage={setPage} />
      {page== "home" && <HomePage/>}
      {page== "products" && <Products/>}
      {page== "about" && <Aboutus/>}
      {page== "useEffect" && <HooksPage/>}
        
    </div>
    </>
  )
}

export default App;
