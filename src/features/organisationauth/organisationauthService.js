import axios from "axios";

const API_URL = "/api/o/register";
const LOGIN_URL = "/api/o/login"
const UPDATE_URL = "/api/o/profile";

// Register a new organisation
const organisationregister = async (organisationData) => {
  const response = await axios.post(API_URL, organisationData);
  return response.data;
};

// Login organisation
const organisationlogin = async (organisationData) => {
  const response = await axios.post(LOGIN_URL, organisationData);
  if (response.data) {
    localStorage.setItem("organisation", JSON.stringify(response.data));
  }
  return response.data;
};

// Update organisation profile
const organisationupdate = async (organisationData, organisationToken) => {
  console.log(organisationToken)
  const response = await axios.patch(UPDATE_URL, organisationData, {
    'headers': {
      'Authorization': `Bearer ${organisationToken}`
    }
  });
  if (response.data) {
    localStorage.setItem("organisation", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout organisation
const organisationlogout = async () => localStorage.removeItem('organisation');

const organisationauthService = {
  organisationregister,
  organisationlogout,
  organisationlogin,
  organisationupdate
};

export default organisationauthService;