import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { O_PROFILE } from '../constants/routes';

const OrganisationEvents = () => {
  const navigate = useNavigate();

  const { organisation } = useSelector((state) => state.organisationauth);

  React.useEffect(() => {
    if (!organisation.introduction || !organisation.hobbies.length) {
      navigate(O_PROFILE);
    }
  }, [organisation, navigate]);
  return (
    <div>OrganisationEvents</div>
  )
}

export default OrganisationEvents