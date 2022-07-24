import axios from "axios";

const API_URL = "/api/v/register";
const LOGIN_URL = "/api/v/login"
const UPDATE_URL = "/api/v/profile";

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

// Logout volunteer
const volunteerlogout = async () => localStorage.removeItem('volunteer');

const volunteerauthService = {
  volunteerregister,
  volunteerlogout,
  volunteerlogin,
  volunteerupdate
};

export default volunteerauthService;