import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { organisationUpdate, organisationreset } from "../features/organisationauth/organisationauthSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { HOME } from "../constants/routes";

const OrganisationProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { organisation, isLoading, isSuccess, isError, message } = useSelector((state) => state.organisationauth);

  const [disabled, setDisabled] = React.useState(false);
  const [formData, setFormData] = React.useState({
    description: !organisation.description ? "" : organisation.description,
    city: !organisation.city ? "" : organisation.city,
    state: !organisation.state ? "" : organisation.state,
    country: !organisation.country ? "" : organisation.country,
  });

  const { description, city, state, country } = formData;

  const isDisabled = e => {
    e.preventDefault();
    if (!organisation.description || !organisation.city || !organisation.state || !organisation.country) {
      toast.error("Please fill in all fields");
    } else {
      setDisabled(!disabled);
    }
  };

  const onChange = e => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const onSubmit = e => {
    e.preventDefault();
    const organisationData = {
      description,
      city,
      state,
      country
    };
    dispatch(organisationUpdate(organisationData));
  };

  React.useEffect(() => {
    if (organisation.description || organisation.city || organisation.state || organisation.country) {
      setDisabled(true);
    }
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess && organisation) {
      navigate(HOME);
    }

    dispatch(organisationreset());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="max-w-2xl md:mx-auto mx-5">
        <form className="space-y-8 mt-5" onSubmit={onSubmit}>
          <div>
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium ">Organisation Profile</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">




                <div className="sm:col-span-6">
                  <label htmlFor="logo" className="block text-sm font-medium text-neutral">
                    Organisation Logo
                  </label>
                  <div className="mt-2 flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-base-100 border border-red-800">
                      <svg className="h-full w-full text-red-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-base-100 py-2 px-3 border border-red-800 rounded-md shadow-sm text-sm leading-4 font-medium text-neutral hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Organisation Name</span>
                  </label>
                  <input type="text" id="name" name="name" placeholder={!organisation ? "Enter Organisation Name" : null} value={organisation.name} className="input input-bordered w-full border-red-800" disabled />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Organisation Website</span>
                  </label>
                  <input type="text" id="website" name="website" placeholder={!organisation ? "Enter Organisation Website" : null} value={organisation.website} className="input input-bordered w-full border-red-800" disabled />

                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input type="email" id="email" name="email" placeholder={!organisation ? "Enter Organisation Email Address" : null} value={organisation.email} className="input input-bordered w-full border-red-800" disabled />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="description" className="block text-sm font-medium text-neutral">
                    Description
                  </label>
                  <div className="mt-1">

                    <textarea className="textarea input-bordered border-red-800 w-full" rows={3} id="description"
                      name="description" value={description} placeholder={!organisation.description ? "Write a few sentences about yourself." : organisation.description} required disabled={disabled} onChange={onChange}></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input type="text" id="city" name="city" value={city} placeholder={!organisation.city ? "Enter City" : organisation.city} className="input input-bordered w-full border-red-800" disabled={disabled} onChange={onChange} required />

                </div>
                <div className="sm:col-span-2">
                  <label className="label">
                    <span className="label-text">State</span>
                  </label>
                  <input type="text" id="state" name="state" value={state} placeholder={!organisation.state ? "Enter State" : organisation.state} className="input input-bordered w-full border-red-800" disabled={disabled} onChange={onChange} required />

                </div>
                <div className="sm:col-span-2">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input type="text" id="country" name="country" value={country} placeholder={!organisation.country ? "Enter Country" : organisation.country} className="input input-bordered w-full border-red-800" disabled={disabled} onChange={onChange} required />

                </div>

              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              {disabled ? (
                <>
                  <button
                    onClick={isDisabled}
                    className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-accent-focus hover:bg-accent hover:text-neutral focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
                  >
                    Edit
                  </button>
                </>
              ) : (<>
                <button
                  type="button"
                  className="bg-base-100 py-2 px-3 border border-red-800 rounded-md shadow-sm text-sm leading-4 font-medium text-neutral hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
                  onClick={isDisabled}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent-focus hover:bg-accent hover:text-neutral focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
                >
                  Save
                </button>
              </>)}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrganisationProfile;