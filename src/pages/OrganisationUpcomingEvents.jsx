import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { O_PROFILE } from '../constants/routes';
import EventCardsList from "../components/EventCardsList";
import { IoSearch } from "react-icons/io5";

const OrganisationEvents = () => {
  const navigate = useNavigate();

  const { organisation } = useSelector((state) => state.organisationauth);
  const { events } = useSelector((state) => state.eventauth);

  React.useEffect(() => {
    if (!organisation.description || !organisation.city || !organisation.state || !organisation.country) {
      navigate(O_PROFILE);
    }
  }, [organisation, navigate]);
  return (
    <>   <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
      <div>
        <div className="flex flex-col text-center items-center">
          <h6 className="text-4xl font-bold mx-2 mb-6"> <span className="text-primary-focus">Upcoming</span> Events</h6>
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
      <EventCardsList events={events} /></>
  );
};

export default OrganisationEvents;