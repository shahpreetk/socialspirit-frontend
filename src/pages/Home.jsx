import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { V_PROFILE, O_PROFILE } from '../constants/routes';
import { IoSearch } from "react-icons/io5";
import EventCardsList from "../components/EventCardsList";
import { getAllEvents } from "../features/eventauth/eventauthSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [upcomingEvents, setUpcomingEvents] = React.useState([]);

  const { volunteer } = useSelector((state) => state.volunteerauth);
  const { organisation } = useSelector((state) => state.organisationauth);
  const { events } = useSelector((state) => state.eventauth);

  const getUpcomingEvents = () => {
    dispatch(getAllEvents());
    const upcoming = events.filter((event) => {
      const date = new Date(event.date);
      const today = new Date();
      return date > today;
    })
    setUpcomingEvents(upcoming);
  }

  React.useEffect(() => {
    getUpcomingEvents();
    if (localStorage.getItem('organisation')) {
      if (!organisation.description || !organisation.city || !organisation.state || !organisation.country) {
        navigate(O_PROFILE);
      }
    }
    if (localStorage.getItem('volunteer')) {
      if (!volunteer.introduction || !volunteer.hobbies.length) {
        navigate(V_PROFILE);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organisation, navigate, volunteer]);

  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="flex flex-col text-center items-center">
            <h6 className="text-4xl font-bold mx-2 mb-6">Easily find <span className="text-primary-focus">volunteering events of your interests</span> in your area!</h6>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered md:w-96 " />
                <button className="btn btn-square">
                  <IoSearch className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EventCardsList events={upcomingEvents} />
    </>
  );
};

export default Home;