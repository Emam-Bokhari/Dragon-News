import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";

const Details = () => {
    const { _id } = useParams(); // Extract _id from URL parameters
    const details = useLoaderData();

    

    const [foundItem, setFoundItem] = useState({});

    useEffect(() => {
        if (Array.isArray(details)) {
            const id = details.find(item => item._id === _id);
            setFoundItem(id);
        } else {
            // Handle the case where 'details' is not an array
            setFoundItem();
        }
    }, [_id, details]);

    

    return (
        <div>
            <div>
                <ShowDetails data={foundItem} />
            </div>
        </div>
    );
};

export default Details;
