import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { V_PROFILE } from '../constants/routes';
const VolunteerEvents = () => {
  const navigate = useNavigate();

  const { volunteer } = useSelector((state) => state.volunteerauth);

  React.useEffect(() => {
    if (!volunteer.introduction || !volunteer.hobbies.length) {
      navigate(V_PROFILE);
    }
  }, [volunteer, navigate]);
  return (
    <div>VolunteerEvents</div>
  )
}

export default VolunteerEvents