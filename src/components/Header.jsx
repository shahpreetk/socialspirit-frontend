import { FaAngleDown, FaBars, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { volunteerLogout, volunteerreset } from "../features/volunteerauth/volunteerauthSlice";
import { organisationLogout, organisationreset } from "../features/organisationauth/organisationauthSlice";
import * as ROUTES from '../constants/routes';

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
      localStorage.removeItem("vprofiles")
      navigate(ROUTES.O_LOGIN);
    }
  };

  return (
    <>
      <header className="navbar bg-base-200 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" id="hamburger-menu" className="btn btn-ghost lg:hidden">
              <FaBars size={18} />
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {volunteer ? (
                <>
                  <li><Link to={ROUTES.HOME}>Events</Link></li>
                  <li tabIndex="0">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="justify-between">
                      My Events
                      <FaAngleDown />
                    </a>
                    <ul className="p-2 bg-base-200">
                      <li><Link to={ROUTES.V_APPLIED_EVENTS}>Applied Events</Link></li>
                      <li><Link to={ROUTES.V_ACCEPTED_EVENTS}>Accepted Events</Link></li>
                      <li><Link to={ROUTES.V_REJECTED_EVENTS}>Rejected Events</Link></li>
                    </ul>
                  </li>
                  <li><Link to={ROUTES.V_PROFILE}>Profile</Link></li>
                  <li><button className="btn btn-ghost normal-case" onClick={onLogout}><FaSignOutAlt /> Logout ({volunteer.name})</button>
                  </li>
                </>
              ) : organisation ? (
                <>
                  <li><Link to={ROUTES.HOME}>Events</Link></li>
                  <li tabIndex="0">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="justify-between">
                      My Events
                      <FaAngleDown />
                    </a>
                    <ul className="p-2 bg-base-200">
                      <li><Link to={ROUTES.O_CREATE_EVENT}>Create New Event</Link></li>
                      <li><Link to={ROUTES.O_UPCOMING_EVENTS}>Upcoming Events</Link></li>
                      <li><Link to={ROUTES.O_PAST_EVENTS}>Past Events</Link></li>
                    </ul>
                  </li>
                  <li><Link to={ROUTES.O_PROFILE}>Profile</Link></li>
                  <li><button className="btn btn-ghost normal-case h-auto" onClick={onLogout}><FaSignOutAlt /> Logout ({organisation.name})</button>
                  </li>
                </>
              ) : (<>
                <li><Link to={ROUTES.V_LOGIN}><FaSignInAlt />Login</Link></li>
                <li><Link to={ROUTES.V_REGISTER}><FaUser />Register</Link></li>
              </>)}

            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">Social Spirit</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {volunteer ? (
              <>

                <li><Link to={ROUTES.HOME}>All Events</Link></li>
                <li tabIndex="0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="justify-between">
                    My Events
                    <FaAngleDown />
                  </a>
                  <ul className="p-2 bg-base-200 z-10">
                    <li><Link to={ROUTES.V_APPLIED_EVENTS}>Applied Events</Link></li>
                    <li><Link to={ROUTES.V_ACCEPTED_EVENTS}>Accepted Events</Link></li>
                    <li><Link to={ROUTES.V_REJECTED_EVENTS}>Rejected Events</Link></li>
                  </ul>
                </li>
                <li><Link to={ROUTES.V_PROFILE}>Profile</Link></li>
                <li><button className="btn btn-ghost normal-case" onClick={onLogout}><FaSignOutAlt /> Logout ({volunteer.name})</button>
                </li>
              </>
            ) : organisation ? (
              <>
                <li><Link to={ROUTES.HOME}>Events</Link></li>
                <li tabIndex="0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="justify-between">
                    My Events
                    <FaAngleDown />
                  </a>
                    <ul className="p-2 bg-base-200 z-10">
                    <li><Link to={ROUTES.O_CREATE_EVENT}>Create New Event</Link></li>
                    <li><Link to={ROUTES.O_UPCOMING_EVENTS}>Upcoming Events</Link></li>
                    <li><Link to={ROUTES.O_PAST_EVENTS}>Past Events</Link></li>
                  </ul>
                </li>
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