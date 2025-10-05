import { Outlet } from "react-router-dom";
import LearnAside from "../../components/LearnAside";
import NavBar from "../../components/NavBar";

const LearnLayout = () => {
    return (
        <>
        <NavBar/>
        <LearnAside/>
        <Outlet />

        </>
    );
}

export default LearnLayout;
