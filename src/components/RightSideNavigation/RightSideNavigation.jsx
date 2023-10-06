import { BiLogoGoogle } from "react-icons/bi"
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook,BsInstagram } from "react-icons/bs"

const RightSideNavigation = () => {
    return (
        <div className=" md:col-span-1" >
            <h2 className="text-[#403F3F] font-semibold md:text-lg lg::text-xl" >Login With</h2>

            <div className="my-5 space-y-2" >

                {/* Google */}
                <div className="border-[1px] border-[#585858] w-full text-sm py-1 rounded-md text-[#332b3c] flex items-center gap-[4px] justify-center" >
                    <BiLogoGoogle className="text-lg" />
                    Login With Google
                </div>

                {/* Github */}
                <div className="border-[1px] border-[#585858] w-full text-sm py-1 rounded-md text-[#332b3c] flex items-center gap-[4px] justify-center" >
                    <AiFillGithub className="text-lg" />
                    Login With Github
                </div>

            </div>



            <h2 className="text-[#403F3F] font-semibold md:text-lg lg::text-xl" >Find Us On</h2>

            <div>

                <div className="mt-5" >

                    {/* Facebook */}
                    <div className="text-[#706F6F] font-medium text-base flex items-center gap-2 border-x-[1px] border-t-[1px] border-[#E7E7E7] rounded-t-md p-3">
                        <BsFacebook className="text-lg text-[#526ca6]" />
                        Facebook
                    </div>

                    {/* Twitter */}
                    <div className="text-[#706F6F] font-medium text-base flex items-center gap-2 border-[1px] border-[#E7E7E7] p-3 ">
                        <AiFillTwitterCircle className="text-xl text-[#58a7de]" />
                        Twitter
                    </div>

                    {/* Instagram */}
                    <div className="text-[#706F6F] font-medium text-base flex items-center gap-2 border-x-[1px] border-b-[1px] border-[#E7E7E7] p-3 rounded-b-md ">
                        <BsInstagram className="text-lg text-[#e98290]" />
                        Instagram
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSideNavigation;