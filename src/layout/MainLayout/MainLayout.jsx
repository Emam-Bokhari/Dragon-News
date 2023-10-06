import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

            {/* Section */}
            <section className="max-w-screen-xl mx-auto px-8 md:px-16" >

                {/* Start Outlet */}
                <div className="my-10" >
                    <Outlet />
                </div>

            </section>

        </div>
    );
};

export default MainLayout;