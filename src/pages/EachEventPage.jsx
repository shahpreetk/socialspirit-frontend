import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VolunteersInterestedTable from "../components/VolunteersInterestedTable";
import RateVolunteersTable from "../components/RateVolunteersTable";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const EachEventPage = () => {
  let params = useParams();
  const [event, setEvent] = useState({});

  const { organisation } = useSelector((state) => state.organisationauth);
  const { events } = useSelector((state) => state.eventauth);
  const { allvolunteers, isLoading, isError, message } = useSelector((state) => state.volunteerauth);

  useEffect(() => {

    const matchedEvent = events.filter((oneEvent) => {
      return oneEvent._id === params.id;
    });
    if (matchedEvent.length > 0) {
      // @ts-ignore
      setEvent(matchedEvent[0]);
    }

    if (isError) {
      toast.error(message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      <div className="py-16 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {event.ownerName}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {event.name}
              </span>
            </h1>

          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">

            <ul>
              <li> {new Date(event.date).toString().slice(0, 21)}</li>
              <li>{event.duration} hours event</li>
              <li>{event.city}, {event.districtCode}</li>
            </ul>


            <figure>
              <img
                className="w-full rounded-lg"
                src="https://placeimg.com/400/225/arch"
                alt="event poster"
                width={1310}
                height={873}
              />

            </figure>
            <h3 className="text-lg">Event Description</h3>
            <p>
              {event.description}
              <br />
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
              aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
              egestas fringilla sapien.
            </p>
          </div>
          {isLoading ? <Spinner /> : !isLoading && allvolunteers && organisation && organisation.name === event.ownerName && new Date(event.date) > new Date() && (
            <VolunteersInterestedTable event={event} />
          )}
          {allvolunteers && organisation && organisation.name === event.ownerName && new Date(event.date) < new Date() && (
            <RateVolunteersTable event={event} />
          )}

        </div>
      </div>
    </>
  );
};

export default EachEventPage;