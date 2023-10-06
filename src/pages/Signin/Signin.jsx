
import Navbar from './../../SharedComponents/Navbar/Navbar';
const Signin = () => {
    return (
        <div >

            
            <Navbar  />
            

            <div className="flex justify-center items-center h-[70vh]" >

                <div className="w-[300px] h-[400px]  shadow-md" >
                    <h2 className="text-[#403F3F] text-xl font-semibold text-center mt-5" >Login your account</h2>

                    <div className="px-5 my-5">
                    <hr />
                    </div>

                    <form className="px-4 space-y-2" >
                        {/* email */}
                        <p className='text-[#403F3F] text-base font-semibold'>Email Address</p>
                        <input type="email" name="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" />

                        {/* password */}
                        <p className='text-[#403F3F] text-base font-semibold' >Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" />

                        {/* login button */}
                           <div className="pt-2" >
                           <input type="submit" value="Login" className="bg-[#403F3F] w-full py-2 rounded-sm text-white font-semibold text-base" />
                           </div>

                        {/* Register link */}
                        <p className="text-[12px] pt-2 text-center font-semibold text-[#706F6F]" >Dont’t Have An Account ? <span className="text-[#f98885]" >Register</span></p>
                        

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Signin;