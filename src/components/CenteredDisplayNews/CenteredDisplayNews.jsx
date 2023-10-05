import DisplayNews from "./DisplayNews/DisplayNews";
import PropTypes from "prop-types"

const CenteredDisplayNews = ({ newsData }) => {
   
    return (
        <div className="md:col-span-2" >

            <h2 className="text-[#403F3F] font-semibold md:text-lg lg::text-xl" >Dragon News Home</h2>

            <div>
                {newsData?.map((item) => <DisplayNews key={item.id} data={item} />)}
            </div>


        </div>
    );
};

    CenteredDisplayNews.propTypes={
        newsData:PropTypes.array.isRequired
    }

export default CenteredDisplayNews;