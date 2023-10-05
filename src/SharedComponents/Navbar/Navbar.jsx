import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5" >

            {/* Left side: Empty div for spacing */}
            <div></div>

            {/* Centered Navigation links */}
            <ul className="flex gap-10 text-lg text-[#706F6F]" >
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/career" >Career</Link></li>
            </ul>


            {/* Right side: user icon and login button */}
            <div className="flex items-center gap-5 " >

                {/* User icon */}
                <div>
                    <FaUserCircle className="text-4xl" />
                </div>

                {/* Login Button */}
                <div>
                    <button className="bg-[#403F3F] px-4 text-white font-semibold text-lg py-1" >Login</button>
                </div>
                
            </div>



        </div>
    );
};

export default Navbar;