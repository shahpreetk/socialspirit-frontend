import { FaBars, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { volunteerLogout, volunteerreset } from "../features/volunteerauth/volunteerauthSlice";
import { organisationLogout, organisationreset } from "../features/organisationauth/organisationauthSlice";
import * as ROUTES from '../constants/routes'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { volunteer } = useSelector((state) => state.volunteerauth);

  const { organisation } = useSelector((state) => state.organisationauth);

  const onLogout = () => {
    if (volunteer) {
      dispatch(volunteerLogout());
      dispatch(volunteerreset());
      navigate(ROUTES.V_LOGIN);
    }
    if (organisation) {
      dispatch(organisationLogout());
      dispatch(organisationreset());
      navigate(ROUTES.O_LOGIN);
    }
  };

  return (
    <>
      <header className="navbar bg-base-200 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <FaBars size={18} />
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {volunteer ? (
                <>
                  <li><Link to={ROUTES.HOME}>Events</Link></li>
                  <li><Link to={ROUTES.V_EVENTS}>My Events</Link></li>
                  <li><Link to={ROUTES.V_PROFILE}>Profile</Link></li>
                  <li><button className="btn btn-ghost normal-case" onClick={onLogout}><FaSignOutAlt /> Logout ({volunteer.name})</button>
                  </li>
                </>
              ) : organisation ? (
              <>
                <li><Link to={ROUTES.HOME}>Events</Link></li>
                <li><Link to={ROUTES.O_EVENTS}>My Events</Link></li>
                <li><Link to={ROUTES.O_PROFILE}>Profile</Link></li>
                <li><button className="btn btn-ghost normal-case" onClick={onLogout}><FaSignOutAlt /> Logout ({organisation.name})</button>
                </li>
              </>
            ) : (<>
                <li><Link to={ROUTES.V_LOGIN}><FaSignInAlt />Login</Link></li>
                  <li><Link to={ROUTES.V_REGISTER}><FaUser />Register</Link></li>
              </>)}

            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Social Spirit</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {volunteer ? (
              <>

                <li><Link to={ROUTES.HOME}>Events</Link></li>
                <li><Link to={ROUTES.V_EVENTS}>My Events</Link></li>
                <li><Link to={ROUTES.V_PROFILE}>Profile</Link></li>
                <li><button className="btn btn-ghost normal-case" onClick={onLogout}><FaSignOutAlt /> Logout ({volunteer.name})</button>
                </li>
              </>
            ) : organisation ? (
              <>
                <li><Link to={ROUTES.HOME}>Events</Link></li>
                <li><Link to={ROUTES.O_EVENTS}>My Events</Link></li>
                <li><Link to={ROUTES.O_PROFILE}>Profile</Link></li>
                <li><button className="btn btn-ghost normal-case" onClick={onLogout}><FaSignOutAlt /> Logout ({organisation.name})</button>
                </li>
              </>
            ) : (<>
              <li><Link to={ROUTES.V_LOGIN}><FaSignInAlt />Login</Link></li>
              <li><Link to={ROUTES.V_REGISTER}><FaUser />Register</Link></li>
            </>)}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;