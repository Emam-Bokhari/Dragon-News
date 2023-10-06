import { useContext } from 'react';
import Navbar from './../../SharedComponents/Navbar/Navbar';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signin = () => {

    const {signin} =useContext(AuthContext)
    

    const handleLogin=(event)=>{
        event.preventDefault()
        const email=event.target.email.value 
        const password=event.target.password.value

        // signin with email and password
        signin(email,password)
        .then(()=>{
            toast.success('Signin Successfully!')
        })
        .catch(error=>{
            toast.error(error.message);
        })

    }
    return (
        <div >

            <Navbar  />

            <div className="flex justify-center items-center h-[70vh]" >

                <div className="w-[300px] h-[400px]  shadow-md" >
                    <h2 className="text-[#403F3F] text-xl font-semibold text-center mt-5" >Login your account</h2>

                    <div className="px-5 my-5">
                    <hr />
                    </div>

                    <form onSubmit={handleLogin} className="px-4 space-y-2" >
                        {/* email */}
                        <p className='text-[#403F3F] text-base font-semibold'>Email Address</p>
                        <input type="email" name="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" required/>

                        {/* password */}
                        <p className='text-[#403F3F] text-base font-semibold' >Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F]" required/>

                        {/* login button */}
                           <div className="pt-2" >
                           <input type="submit" value="Login" className="bg-[#403F3F] w-full py-2 rounded-sm text-white font-semibold text-base" />
                           </div>

                        {/* Register link */}
                       <Link to="/register" >
                       <p className="text-[12px] pt-2 text-center font-semibold text-[#706F6F]" >Dont’t Have An Account ? <span className="text-[#f98885]" >Register</span></p>
                       </Link>
                        

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Signin;