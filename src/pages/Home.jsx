import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { V_PROFILE, O_PROFILE } from '../constants/routes';

const Home = () => {
  const navigate = useNavigate();

  const { volunteer } = useSelector((state) => state.volunteerauth);
  const { organisation } = useSelector((state) => state.organisationauth);

  React.useEffect(() => {
    if (localStorage.getItem('organisation')) {
      if (!organisation.introduction || !organisation.hobbies.length) {
        navigate(O_PROFILE);
      }
    }
    if (localStorage.getItem('volunteer')){
      if (!volunteer.introduction || !volunteer.hobbies.length) {
        navigate(V_PROFILE);
      }
    }
  }, [organisation, navigate, volunteer]);

  return (
    <>
      <div> Home</div>
    </>
  );
};

export default Home;