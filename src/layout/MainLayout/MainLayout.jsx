import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <Link to="/" >Home</Link>
                    </ul>
                </nav>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;