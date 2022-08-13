import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_EVENTS } from "../constants/routes";

const NoButtonEventCard = ({ events }) => {

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        {
          events && events.map((event, i) =>
            <div
              key={event._id}
              className="col-span-12 md:col-span-5 lg:col-span-4"
            >
              <div className="card w-auto bg-base-100 shadow-md border-2 border-base-200 mx-6 md:mx-0">
                <div className="card-body grid grid-flow-col p-4 items-baseline">
                  <Link to={`${ALL_EVENTS}/${event._id}`} className="hover:underline">
                    <h2 className="card-title">{event.name}</h2>
                  </Link>
                  <p className="text-right align-middle">{new Date(event.date).toString().slice(0, 21)}</p>
                </div>
                <figure>
                  <img loading="lazy" src={`https://placeimg.com/400/22${i}/arch`} alt={event.name} width="100%" height="100%" />
                </figure>
                <div className="card-body p-4">
                  <p className="text-sm">{event.city}, {event.districtCode}</p>
                  <div className="flex items-center text-lg">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                        <span className="text-sm">{event.ownerName.slice(0, 1)}</span>
                      </div>
                    </div> <p className="ml-2 md:text-lg text-md">{event.ownerName}</p></div>

                  <div className="card-actions justify-start mt-2">
                    {event.tags.map((tag, i) => (
                      <div key={i} className="badge badge-outline">#{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </>

  );
};

NoButtonEventCard.defaultProps = {
  event: {
    name: '',
    date: '',
    city: '',
    districtCode: '',
    ownerName: '',
    tags: [],
  },
  i: 0,
};

export default NoButtonEventCard;