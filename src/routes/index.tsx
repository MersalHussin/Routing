import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import NavBar from "../components/NavBar";

const router = createBrowserRouter(
   createRoutesFromElements(
<>

      {/* Root Layout */}
      <Route element={
        <>
        <NavBar />
        <Outlet />
          </> } path="/">
        {/* <Route element={<h1>Home</h1>} path="" />, */}
        <Route element={<h1>About</h1>} path="about" />,
        <Route element={<h1>Team</h1>} path="team" />,
        <Route element={<h1>Contact</h1>} path="Contact" />,
      </Route>
</>
));

export default router;