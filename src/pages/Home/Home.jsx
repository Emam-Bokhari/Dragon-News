import Header from "../../SharedComponents/Header";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>

            {/* Start Header */}
            <div>
                <Header />
            </div>

            {/* Latest News */}
            <div className="flex my-5 " >
                <span className="bg-[#D72050] text-base font-medium px-4 py-1 text-white" >Latest</span>
                <Marquee>
                    <h2 className="text-lg font-semibold text-[#403F3F]" >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h2>
                </Marquee>
            </div>

            {/* Start Navbar */}
            <div>
                <Navbar />
            </div>

        </div>
    );
};

export default Home;