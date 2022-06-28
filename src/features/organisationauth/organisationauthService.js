import axios from "axios";

const API_URL = "/api/o/register";
const LOGIN_URL = "/api/o/login"

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

// Logout organisation
const organisationlogout = async () => localStorage.removeItem('organisation');

const organisationauthService = {
  organisationregister,
  organisationlogout,
  organisationlogin
};

export default organisationauthService;