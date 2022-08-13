import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { O_PROFILE } from '../constants/routes';
import { IoSearch } from "react-icons/io5";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import EventCard from "../components/EventCard";

const OrganisationEvents = () => {
  const navigate = useNavigate();
  // const [pastEvents, setPastEvents] = React.useState([]);

  const { organisation } = useSelector((state) => state.organisationauth);
  const { pastEvents, isLoading, isError, message } = useSelector((state) => state.eventauth);

  React.useEffect(() => {
    // getPastEvents();
    if (!organisation.description || !organisation.city || !organisation.state || !organisation.country) {
      navigate(O_PROFILE);
    }

    if (isError) {
      toast.error(message);
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
        <div>
          <div className="flex flex-col text-center items-center">
            <h6 className="text-4xl font-bold mx-2 mb-6"> <span className="text-primary-focus">Past</span> Events</h6>
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
      <EventCard events={pastEvents} />

    </>
  )
}

export default OrganisationEvents