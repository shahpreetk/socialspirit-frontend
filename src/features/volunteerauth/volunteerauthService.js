import axios from "axios";

const API_URL = "/api/v/register";

// Register a new volunteer
const volunteerregister = async (volunteerData) => {
  const response = await axios.post(API_URL, volunteerData);
  // if (response.data) {
  //   localStorage.setItem("volunteer", JSON.stringify(response.data));
  // }
  return response.data;
};

const volunteerauthService = {
  volunteerregister,
};

export default volunteerauthService;