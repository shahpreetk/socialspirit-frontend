import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EachEventPage = () => {
  let params = useParams();

  const [event, setEvent] = useState({});

  const { events } = useSelector((state) => state.eventauth);

  useEffect(() => {
    const matchedEvent = events.filter((oneEvent) => {
      return oneEvent._id === params.id;
    });
    if (matchedEvent.length > 0) {
      // @ts-ignore
      setEvent(matchedEvent[0]);
    }
  }, [events, params.id]);

  return (
    <>
      {/* <div className="hero min-h-full lg:mt-5 align-start bg-base-100 py-5">
          <div className="flex flex-col text-left items-start">
          <h3 className="text-xl font-bold mx-2 mb-6">{event.ownerName}</h3>
          <h3 className="text-xl font-bold mx-2 mb-6">{event.ownerName}</h3>
          </div>
      </div> */}
      <div className="relative py-16 overflow-hidden">

        <div className="relative px-4 sm:px-6 lg:px-8">
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
            <h3>Event Description</h3>
            <p>
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachEventPage;