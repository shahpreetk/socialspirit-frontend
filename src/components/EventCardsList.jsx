import React from 'react';
import EventCard from "./EventCard";

const EventCardsList = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap mt-8 gap-10 justify-evenly">
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </>
  );
};

export default EventCardsList;