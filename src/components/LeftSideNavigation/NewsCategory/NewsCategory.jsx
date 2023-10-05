import PropTypes from "prop-types"

const NewsCategory = ({data}) => {
    const {name}=data
    return (
        <div>
            <div>
                <p className="text-[#9F9F9F] text-base lg:text-xl font-medium my-5 lg:ml-10 " >{name}</p>
            </div>
        </div>
    );
};

NewsCategory.propTypes={
    data:PropTypes.object.isRequired
}

export default NewsCategory;