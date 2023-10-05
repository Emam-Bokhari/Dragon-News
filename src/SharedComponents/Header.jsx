import moment from "moment/moment";

const Header = () => {
    return (
        <div className="space-y-2" >

            {/* Header Image */}
            <div className="flex justify-center" >
            <img className="w-96" src="https://i.ibb.co/qpt9PJm/logo.png" alt="logo" />
            </div>

            <h2 className="text-center text-lg font-normal text-[#706F6F]" >Journalism Without Fear or Favour</h2>

            <div className="text-lg text-[#403F3F] font-medium text-center" >
                {moment().format("dddd, MMMM D, YYYY")}
            </div>

        </div>
    );
};

export default Header;