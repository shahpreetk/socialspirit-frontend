import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { O_PROFILE } from '../constants/routes';

const OrganisationEvents = () => {
  const navigate = useNavigate();

  const { organisation } = useSelector((state) => state.organisationauth);

  React.useEffect(() => {
    if (!organisation.description || !organisation.city || !organisation.state || !organisation.country) {
      navigate(O_PROFILE);
    }
  }, [organisation, navigate]);
  return (
    <div>OrganisationEvents</div>
  )
}

export default OrganisationEvents