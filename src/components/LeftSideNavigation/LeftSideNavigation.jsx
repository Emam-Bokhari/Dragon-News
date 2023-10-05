import NewsCategory from "./NewsCategory/NewsCategory";
import PropTypes from "prop-types"

const LeftSideNavigation = ({ newsCategories }) => {


    return (
        <div className="border-2 border-red-500 md:col-span-1" >

            <div>
                <h2 className="text-[#403F3F] font-semibold md:text-lg lg::text-xl" >All Caterogy</h2>
                <p className="bg-[#E7E7E7] py-2 rounded-md text-center text-[#403F3F] font-semibold md:text-lg lg:text-xl my-5">National News</p>

                {/* News Categories */}
                <div>
                    {newsCategories?.map((item) => <NewsCategory key={item.id} data={item} />)}
                </div>

            </div>
            
        </div>
    );
};

LeftSideNavigation.propTypes = {
    newsCategories: PropTypes.array.isRequired
}

export default LeftSideNavigation;