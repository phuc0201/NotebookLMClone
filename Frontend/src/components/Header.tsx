import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/images/artificial-intelligence.png";
import avatarDefault from "../assets/images/panda.png";
const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-primary text-white p-3 px-5">
      <div>
        <Link to={"/"} className="logo flex items-center gap-2 text-xl">
          <img src={logo} alt="Logo" className="w-12" />
          <span className="font-medium">Apec Assistant</span>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 border border-zinc-600 p-1 px-3 rounded-full text-sm">
          <IoIosSettings className="text-white text-2xl" />
          <p>Cài đặt</p>
        </div>
        <div>
          <img
            src={avatarDefault}
            alt="avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
