import { FaBars, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="navbar bg-base-200 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <FaBars size={18} />
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/v/login"><FaSignInAlt />Login</Link></li>
              <li><Link to="/v/register"><FaUser />Register</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Social Spirit</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/v/login"><FaSignInAlt />Login</Link></li>
            <li><Link to="/v/register"><FaUser />Register</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;