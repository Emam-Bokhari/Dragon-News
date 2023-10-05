import Header from "../../SharedComponents/Header/Header";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Latest from "../../components/Latest";
import LeftSideNavigation from './../../components/LeftSideNavigation/LeftSideNavigation';
import CenteredDisplayNews from './../../components/CenteredDisplayNews/CenteredDisplayNews';
import RightSideNavigation from './../../components/RightSideNavigation/RightSideNavigation';
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


const Home = () => {
    const newsCategories=useLoaderData()
    const [newsData,setNewsData]=useState()
    useEffect(()=>{
        fetch("./news.json")
        .then(res=>res.json())
        .then(data=>setNewsData(data))
    },[])

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

                <LeftSideNavigation newsCategories={newsCategories} />
                <CenteredDisplayNews newsData={newsData}/>
                <RightSideNavigation/>

            </div>

        </div>
    );
};

export default Home;