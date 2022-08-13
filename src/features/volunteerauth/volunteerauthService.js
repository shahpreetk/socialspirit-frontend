import axios from "axios";

const API_URL = "/v/register";
const LOGIN_URL = "/v/login"
const UPDATE_URL = "/v/profile";
const GET_PROFILES_URL = "/v/profiles";

// Register a new volunteer
const volunteerregister = async (volunteerData) => {
  const response = await axios.post(API_URL, volunteerData);
  return response.data;
};

// Login volunteer
const volunteerlogin = async (volunteerData) => {
  const response = await axios.post(LOGIN_URL, volunteerData);
  if (response.data) {
    localStorage.setItem("volunteer", JSON.stringify(response.data));
  }
  return response.data;
};

// Update volunteer profile
const volunteerupdate = async (volunteerData, volunteerToken) => {
  const response = await axios.patch(UPDATE_URL, volunteerData, {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${volunteerToken}`
    }
  });
  if (response.data) {
    localStorage.setItem("volunteer", JSON.stringify(response.data));
  }
  return response.data;
};

// Get all volunteers
const getallvolunteers = async () => {
  const response = await axios.get(GET_PROFILES_URL);
  if (response.data) {
    localStorage.setItem("vprofiles", JSON.stringify(response.data));
  }
  return response.data;
}

// Logout volunteer
const volunteerlogout = async () => localStorage.removeItem('volunteer');

const volunteerauthService = {
  volunteerregister,
  volunteerlogout,
  volunteerlogin,
  volunteerupdate,
  getallvolunteers,
};

export default volunteerauthService;