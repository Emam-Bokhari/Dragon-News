import PropTypes from "prop-types"
import { BiSolidShareAlt } from "react-icons/bi"
import { PiBookmarkSimpleThin } from "react-icons/pi"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom";

const DisplayNews = ({ data }) => {
    
    const { _id, total_view, title, image_url, details, author: { name, published_date, img }, rating: { number } } = data
  
    return (
        <div className="my-5" >
            {/* main div for card */}
            <div>

                <div className=" " >

                    {/* author information */}
                    <div className="flex justify-between p-4 bg-[#F3F3F3] rounded-md" >
                        <div className="flex items-center gap-2" >
                            <div>
                                <img className="w-10 rounded-full" src={img} alt="author image" />
                            </div>

                            <div>
                                <h2 className="text-[#403F3F] text-base font-semibold" >{name}</h2>
                                <p className="text-[#706F6F] font-normal text-sm" >{published_date}</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-2xl" >
                            <PiBookmarkSimpleThin />
                            <BiSolidShareAlt />
                        </div>
                    </div>

                    <Link to={`/details/${_id}`} >
                        {/* News details information */}
                        <div className="space-y-5 border-2 border-[#E7E7E7] px-3" >
                            {/* News title */}
                            <h2 className="mt-5 text-[#403F3F] text-xl font-bold" >{title}</h2>

                            {/* News thumbnail image */}
                            <img src={image_url} alt="Thumbnail image" />

                            {/* News details */}
                            <p className="text-[#706F6F] font-normal text-base" >{details.slice(0, 200)}...
                                <span className="block mt-[4px] text-[#FF8C47] font-semibold text-lg" >Read More</span>
                            </p>


                            {/* Horizontal line */}
                            <hr className="border-[1px] border-[#E7E7E7]" />

                            {/* Rating & total view */}
                            <div className="flex justify-between items-center py-2 " >
                                {/* Rating */}
                                <div>
                                    <span className="text-[#706F6F] font-medium text-base" >
                                        Rating: {number}
                                    </span>
                                </div>


                                {/* Total view */}
                                <div className="flex items-center gap-2 justify-end" >

                                    <span className="text-2xl">
                                        <AiOutlineEye />
                                    </span>

                                    <span className="text-[#706F6F] font-medium text-base" >
                                        {total_view}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </Link>


                </div>

            </div>
        </div>
    );
};

DisplayNews.propTypes = {
    data: PropTypes.object.isRequired
}

export default DisplayNews;