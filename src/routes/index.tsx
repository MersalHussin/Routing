import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Aboutus from "../pages/AboutUsPage";
import Products from "../pages/ProductsPage";
import RootLayout from "../pages/Layout";

const router = createBrowserRouter(
   createRoutesFromElements(
<>

      {/* Root Layout */}
      {/* الـRoot ده معناه اي حاجه بعد / هيتبق عليها الـ RootLayout */}
      <Route element={
        <>
          <RootLayout />
      
          </> } path="/">
        <Route index element= {<HomePage/>} />,
        <Route element={<Aboutus/>} path="about" />,
        <Route element={<Products/>} path="products" />,
        <Route element={<h1>Contact</h1>} path="Contact" />,
      </Route>
</>
));


export default router;


/**
  * Layout.tsx
  * Page Component => index.tsx => Home Page
  * Page Component => index.tsx => About Page
  * Page Component => index.tsx => Products Page
  * **/