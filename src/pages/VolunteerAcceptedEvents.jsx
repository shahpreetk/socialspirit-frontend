import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { V_PROFILE } from '../constants/routes';
import { IoSearch } from "react-icons/io5";
import EventCardsList from "../components/EventCardsList";

const VolunteerEvents = () => {
  const navigate = useNavigate();
  const [acceptedEvents, setAcceptedEvents] = React.useState([]);

  const { volunteer } = useSelector((state) => state.volunteerauth);
  const { events } = useSelector((state) => state.eventauth);

  const getAcceptedEvents = () => {
    const accepted = events.filter((event) => {
      const date = new Date(event.date);
      const today = new Date();
      return date > today;
    });
    setAcceptedEvents(accepted);
  };

  React.useEffect(() => {
    getAcceptedEvents();
    if (!volunteer.introduction || !volunteer.hobbies.length) {
      navigate(V_PROFILE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volunteer, navigate]);
  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="flex flex-col text-center items-center">
            <h6 className="text-4xl font-bold mx-2 mb-6"> <span className="text-primary-focus">Accepted</span> Events</h6>
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
      <EventCardsList events={acceptedEvents} />
    </>
  );
};

export default VolunteerEvents;