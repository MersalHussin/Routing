import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Aboutus from "../pages/AboutUsPage";
import Products from "../pages/ProductsPage";
import RootLayout from "../pages/Layout";
import QuickStartPage from "../pages/learn";
import LearnLayout from "../pages/learn/LearnLayout";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installiton from "../pages/learn/Installiton";
import Login from "../pages/Login";
import Contribute from "../pages/Contribute";
import PrtectedRoute from "../components/auth/PrtectedRoute";
import ErrorRootHandler from "../components/errors/ErrorRootHandler";
import PageNotFound from "../components/pageNotFound";

const isLoggedIn = true;
const userData = isLoggedIn
  ? { name: "John Doe", email: "mersalhussin" }
  : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      {/* الـRoot ده معناه اي حاجه بعد / هيتبق عليها الـ RootLayout */}
      <Route element={<RootLayout />} path="/">
        <Route index element={<HomePage />} />,
        <Route element={<Aboutus />} path="about" />,
        <Route element={<Products />} path="products" />,
        <Route
          element={
            <PrtectedRoute
              data={userData}
              isAllowd={!isLoggedIn}
              redireactPath="/contribute"
            >
              <Login />
            </PrtectedRoute>
          }
          path="login"
        />
        ,
        <Route 
          element={
            <PrtectedRoute isAllowd={isLoggedIn} redireactPath="/login">
              <Contribute />
            </PrtectedRoute>
          }
          path="contribute"
           errorElement={<ErrorRootHandler statusCode={404}/>}
        />
        ,
      </Route>

      {/* Learn Layout */}
      <Route element={<LearnLayout />} path="/learn">
        <Route index element={<QuickStartPage />} path="quickstart" />,
        <Route element={<ThinkingInReact />} path="thinking" />,
        <Route element={<Installiton />} path="installition" />,
      </Route>


      {/* Route Not Found */}
      <Route path="*"  element={<PageNotFound />}/>
    </>
  )
);

export default router;

/**
 * Layout.tsx
 * Page Component => index.tsx => Home Page
 * Page Component => index.tsx => About Page
 * Page Component => index.tsx => Products Page
 * **/
