import React from 'react';

const EventCard = ({event }) => {
  return (
    <>
      <div className="card w-auto bg-base-100 shadow-md border-2 border-base-200 mx-6 md:mx-0">
        <div className="card-body grid grid-flow-col p-4 items-baseline">
          <h2 className="card-title">{event.name}</h2>
          <p className="text-right align-middle">{new Date(event.date).toString().slice(0, 21)}</p>
        </div>
        <figure><img src="https://placeimg.com/400/225/arch" alt={event.name} /></figure>
        <div className="card-body p-4">
          <p className="text-sm">{event.city}, {event.districtCode}</p>
          <div className="flex items-center text-lg">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                <span className="text-sm">{event.ownerName.slice(0,1)}</span>
              </div>
            </div> <p className="ml-2 md:text-lg text-md">{event.ownerName}</p></div>

            <div className="card-actions justify-start mt-2">
              {event.tags.map((tag, i) => (
                <div key={i} className="badge badge-outline">#{tag}</div>
              ))}
            </div>
            <div className="card-actions justify-end mt-2 md:mt-0">
              <button className="btn btn-primary">Register Interest!</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;