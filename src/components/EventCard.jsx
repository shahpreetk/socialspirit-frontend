import React from 'react'

const EventCard = ({event}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt={event.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{event.name}</h2>
          <p>{event.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Register Interest!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard