import Marquee from "react-fast-marquee";

const Latest = () => {
    return (
        <div>
            <div className="flex my-5 " >
                <span className="bg-[#D72050] text-base font-medium px-4 py-1 text-white" >Latest</span>
                <Marquee>
                    <h2 className="text-lg font-semibold text-[#403F3F]" >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h2>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;