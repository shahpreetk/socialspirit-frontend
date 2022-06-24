import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <header className="header">
       <div className="logo">
         <Link to="/">Social Spirit</Link>
       </div>
       <ul>
         <li><Link to="/login"><FaSignInAlt/>Login</Link></li>
         <li><Link to="/register"><FaUser/>Register</Link></li>
       </ul>
     </header> */}
      <header className="navbar bg-base-200">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Social Spirit</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/login"><FaSignInAlt />Login</Link></li>
            <li><Link to="/register"><FaUser />Register</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;