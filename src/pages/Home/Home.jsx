import Header from "../../SharedComponents/Header/Header";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Latest from "../../components/Latest";
import LeftSideNavigation from './../../components/LeftSideNavigation/LeftSideNavigation';
import CenteredDisplayNews from './../../components/CenteredDisplayNews/CenteredDisplayNews';
import RightSideNavigation from './../../components/RightSideNavigation/RightSideNavigation';


const Home = () => {
    return (
        <div>

            {/* Start Header */}
            <div>
                <Header />
            </div>

            {/* Latest News */}
            <Latest/>

            {/* Start Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Right,Left Side Navigation & Center Display News */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10" >
                <LeftSideNavigation/>
                <CenteredDisplayNews/>
                <RightSideNavigation/>
            </div>

        </div>
    );
};

export default Home;