import { Outlet } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>

            {/* Section */}
            <section className="max-w-screen-xl mx-auto px-8 md:px-16 border-2 border-red-500 my-10" >

                {/* Start Navbar */}
                <div>
                    <Navbar />
                </div>

                {/* Start Outlet */}
                <div className="my-10" >
                    <Outlet />
                </div>

            </section>

        </div>
    );
};

export default MainLayout;