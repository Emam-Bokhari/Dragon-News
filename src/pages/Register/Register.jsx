import { useContext } from "react";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const photourl = event.target.photourl.value
        const email = event.target.email.value
        const password = event.target.password.value
        const terms = event.target.terms.checked

        // signup with email and password
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center h-[100vh]" >

                <div className="w-[350px] h-[550px]  shadow-md" >
                    <h2 className="text-[#403F3F] text-xl font-semibold text-center mt-5" >Register your account</h2>

                    <div className="px-5 my-5">
                        <hr />
                    </div>

                    <form onSubmit={handleRegister} className="px-4 space-y-2" >

                        {/* name */}
                        <p className='text-[#403F3F] text-base font-semibold'>Your Name</p>
                        <input type="text" name="name" placeholder="Enter your name" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" />


                        {/* pthto url */}
                        <p className='text-[#403F3F] text-base font-semibold'>Photo URL</p>
                        <input type="text" name="photourl" placeholder="Enter your photo url" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" />


                        {/* email */}
                        <p className='text-[#403F3F] text-base font-semibold'>Email Address</p>
                        <input type="email" name="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" />


                        {/* password */}
                        <p className='text-[#403F3F] text-base font-semibold' >Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" />

                        {/* terms and condition */}
                        <div className="py-2" >
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms" className="ml-2 text-[#706F6F] text-base">Accept <span className="font-semibold" >Term & Conditions</span></label>
                        </div>

                        {/* login button */}
                        <div className="pt-2" >
                            <input type="submit" value="Register" className="bg-[#403F3F] w-full py-2 rounded-sm text-white font-semibold text-base" />
                        </div>




                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;