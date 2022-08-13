import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { V_PROFILE } from '../constants/routes';
import { IoSearch } from "react-icons/io5";
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const VolunteerEvents = () => {
  const navigate = useNavigate();

  const { volunteer } = useSelector((state) => state.volunteerauth);
  const { pastEvents, isLoading, isError, message } = useSelector((state) => state.eventauth);


  React.useEffect(() => {
    if (!volunteer.introduction || !volunteer.hobbies.length) {
      navigate(V_PROFILE);
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
            <h6 className="text-4xl font-bold mx-2 mb-6"> <span className="text-primary-focus">Rejected</span> Events</h6>
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

export default VolunteerEvents