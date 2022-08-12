import axios from "axios";

const API_URL = "/events";
const ADD_EVENT = "/event/add";

// Add new event
const addevent = async (eventData, organisationToken) => {
  const response = await axios.post(ADD_EVENT, eventData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${organisationToken}`,
    },
  });
  return response.data;
};

// Get all events
const getallevents = async () => {
  const response = await axios.get(API_URL);
  if (response.data) {
    localStorage.setItem("events", JSON.stringify(response.data));
  }
  return response.data;
};

const eventauthService = {
  addevent,
  getallevents,
};

export default eventauthService;
