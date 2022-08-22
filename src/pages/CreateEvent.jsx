import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addEvent, eventreset } from "../features/eventauth/eventauthSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { O_UPCOMING_EVENTS } from "../constants/routes";
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

const CreateEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { event, isLoading, isSuccess, isError, message } = useSelector((state) => state.eventauth);

  // const [disabled, setDisabled] = React.useState(false);
  const [formData, setFormData] = React.useState({
    eventName: "",
    eventDate: "",
    eventDuration: "",
    eventMaxVolunteers: "",
    city: "",
    districtCode: "",
    eventDescription: "",
    eventSocialMedia: "",
    eventTags: "",
    eventImage: "",
  });

  const { eventName, eventDate, eventDescription, eventDuration, eventMaxVolunteers, city, districtCode, eventSocialMedia, eventTags, eventImage } = formData;

  const onChange = e => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const onSubmit = e => {
    e.preventDefault();
    const eventData = {
      name: eventName,
      date: eventDate,
      duration: eventDuration,
      maxVolunteers: eventMaxVolunteers,
      description: eventDescription,
      city,
      districtCode,
      socialMediaLink: eventSocialMedia,
      tags: eventTags,
      image:"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
    };
    dispatch(addEvent(eventData));
  };

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess && event) {
      navigate(O_UPCOMING_EVENTS);
    }

    dispatch(eventreset());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="max-w-2xl md:mx-auto mx-5">
        <form className="space-y-8 mt-5" onSubmit={onSubmit}>
          <div>
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium ">Create New Event</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed to volunteers so please share detailed information of the event.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Event Name</span>
                  </label>
                  <input type="text" id="eventName" name="eventName" placeholder="Enter Event Name" value={eventName} onChange={onChange} className="input input-bordered w-full border-red-800" required />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Event Date &amp; Time</span>
                  </label>
                  <input type="text" id="eventDate" name="eventDate" placeholder="YYYY-MM-DD HH:mm" value={eventDate} onChange={onChange} className="input input-bordered w-full border-red-800" required />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Event Duration</span>
                  </label>
                  <input type="text" id="eventDuration" name="eventDuration" placeholder="Enter Event Duration (in hours)" value={eventDuration} onChange={onChange} className="input input-bordered w-full border-red-800" required />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Max. Volunteers needed</span>
                  </label>
                  <input type="text" id="eventMaxVolunteers" name="eventMaxVolunteers" placeholder="Enter maximum volunteers needed" value={eventMaxVolunteers} onChange={onChange} className="input input-bordered w-full border-red-800" />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input type="text" id="city" name="city" value={city} placeholder="Enter City of event location" className="input input-bordered w-full border-red-800" onChange={onChange} required />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">District Code</span>
                  </label>
                  <input type="text" id="districtCode" name="districtCode" value={districtCode} placeholder="Enter District Code of event location" className="input input-bordered w-full border-red-800" onChange={onChange} required />

                </div>




                <div className="sm:col-span-6">
                  <label htmlFor="eventDescription" className="block text-sm font-medium text-neutral">
                    Event Description
                  </label>
                  <div className="mt-1">

                    <textarea className="textarea input-bordered border-red-800 w-full" rows={3} id="eventDescription"
                      name="eventDescription" value={eventDescription} placeholder="Provide detailed information about the event." required onChange={onChange}></textarea>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="eventTags" className="block text-sm font-medium text-neutral">
                    Event Tags
                  </label>
                  <div className="mt-1">
                    <input type="text" id="eventTags" name="eventTags" value={eventTags} placeholder="Enter tags related to the event (sperated by commas)" className="input input-bordered w-full border-red-800" onChange={onChange} required />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="eventSocialMedia" className="block text-sm font-medium text-neutral">
                    Event Social Media
                  </label>
                  <div className="mt-1">
                    <input type="text" id="eventSocialMedia" name="eventSocialMedia" placeholder="Enter Event social media link" value={eventSocialMedia} onChange={onChange}
                      className="input input-bordered w-full border-red-800" required />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="cover-photo" className="block text-sm font-medium text-neutral">
                    Event Poster / Past Photos
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-800 border-opacity-70 border-dashed rounded-md">
                    <div className="space-y-1 text-center content-center">
                      <MdOutlineAddPhotoAlternate size={28} className="mx-auto mb-1" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-base-100 rounded-md font-medium text-neutral hover:text-secondary-content focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary-content"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-center md:justify-end">
              <button
                className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-accent-focus hover:bg-accent hover:text-neutral focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
              >
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;