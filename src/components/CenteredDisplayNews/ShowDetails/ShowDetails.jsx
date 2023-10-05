import Header from "../../../SharedComponents/Header/Header";
import Navbar from "../../../SharedComponents/Navbar/Navbar";
import RightSideNavigation from "../../RightSideNavigation/RightSideNavigation";
import {AiOutlineArrowLeft} from "react-icons/ai"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const ShowDetails = ({ data }) => {
    console.log(data);
    const {thumbnail_url,title,details} = data || {}
    return (
        <div>

            <Header />

            <Navbar />

            <div className="grid grid-cols-4 gap-5" >
                <div className="col-span-3 border-2 border-[#E7E7E7] p-4 rounded-sm" >
                    {/* image */}
                    
                        <img className="w-full h-[380px]" src={thumbnail_url}  />
                   

                    
                        <h2 className="mt-5 text-[#403F3F] text-xl font-bold" >{title}</h2>

                        <p className="text-[#706F6F] font-normal text-base mt-5">{details}</p>

                        
                       <Link to="/" >
                       <button className="bg-[#D72050] font-medium text-white text-lg mt-5 px-3 py-2 flex items-center gap-2" > <AiOutlineArrowLeft className="text-xl" /> All news in this categories</button>
                       </Link>
                        
                    
                </div>

                {/* Right side Navigation */}
                <div className="col-span-1" >
                    <RightSideNavigation />
                </div>
            </div>

        </div>
    );
};

ShowDetails.propTypes={
    data:PropTypes.object
}

export default ShowDetails;