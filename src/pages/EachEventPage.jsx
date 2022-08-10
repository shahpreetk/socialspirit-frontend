import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EachEventPage = () => {
  let params = useParams();

  const [event, setEvent] = useState([]);

  const { events } = useSelector((state) => state.eventauth);

  useEffect(() => {
    const matchedEvent = events.filter((oneEvent) => {
      return oneEvent._id === params.id;
    });
    if (matchedEvent.length > 0) {
      // @ts-ignore
      setEvent(matchedEvent);
    }
  }, [events, params.id]);

  return (
    <>
      <div className="hero min-h-full lg:mt-5 align-center bg-base-100 py-5">
          
      </div>
    </>
  );
};

export default EachEventPage;