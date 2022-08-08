import React from 'react';
import EventCard from "./EventCard";

const EventCardsList = ({ events }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        {
          events.map((event) =>
            <div
              key={event._id}
              className="col-span-12 md:col-span-5 lg:col-span-4"
            >
              <EventCard event={event} />
            </div>
          )
        }
      </div>
    </>
  );
};

export default EventCardsList;;