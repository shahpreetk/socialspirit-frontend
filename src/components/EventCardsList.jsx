import React from 'react';
import EventCard from "./EventCard";

const EventCardsList = ({events}) => {
  return (
    <>
      <div className="flex flex-row flex-wrap mt-8 gap-10 justify-evenly">
        {
          events.map((event) =>
            <EventCard key={event._id} event={event} />
          )
       }
      </div>
    </>
  );
};

export default EventCardsList;