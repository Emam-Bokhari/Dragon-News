import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from './../pages/About/About';
import Career from './../pages/Career/Career';
import Details from "../components/CenteredDisplayNews/Details/Details";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch("../categories.json"),
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/career",
                element: <Career />
            },
            {
                path: "/details/:_id",
                loader:()=>fetch("./news.json"),
                element: <Details />
            }
        ]
    }
])
export default Router