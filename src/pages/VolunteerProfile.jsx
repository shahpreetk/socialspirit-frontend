import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { volunteerUpdate, volunteerreset } from "../features/volunteerauth/volunteerauthSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { HOME } from "../constants/routes";

const VolunteerProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const { volunteer, isLoading, isSuccess, isError, message } = useSelector((state) => state.volunteerauth);

  const [disabled, setDisabled] = React.useState(false);
  const [formData, setFormData] = React.useState({
    introduction: !volunteer.introduction ? "" : volunteer.introduction,
    hobbies: !volunteer.hobbies ? "" : volunteer.hobbies.join(","),
  });

  const { introduction, hobbies } = formData;

  const isDisabled = e => {
    e.preventDefault();
    if (!volunteer.introduction || !volunteer.hobbies.length) {
      toast.error("Please fill in all fields");
    } else {
      setDisabled(!disabled);
    }
  };

  const onChange = e => {
    if (e.target.name === "introduction") {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    if (e.target.name === "hobbies") {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const volunteerData = {
      introduction,
      hobbies,
    };
    dispatch(volunteerUpdate(volunteerData));
  };

  React.useEffect(() => {
    if (volunteer.introduction || volunteer.hobbies.length) {
      setDisabled(true);
    }
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess && volunteer) {
      navigate(HOME);
    }

    dispatch(volunteerreset());
  }, [isError, isSuccess, volunteer, message, navigate, dispatch]);

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
                <h3 className="text-lg leading-6 font-medium ">Volunteer Profile</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">




                <div className="sm:col-span-6">
                  <label htmlFor="photo" className="block text-sm font-medium text-neutral">
                    Profile Photo
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
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" id="fname" name="name" placeholder={!volunteer ? "Enter your First Name" : null} value={volunteer.name.split(" ")[0]} className="input input-bordered w-full border-red-800" disabled />

                </div>

                <div className="sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" id="lname" name="name" placeholder={!volunteer ? "Enter your Last Name" : null} value={volunteer.name.split(" ")[1]} className="input input-bordered w-full border-red-800" disabled />

                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input type="email" id="email" name="email" placeholder={!volunteer ? "Enter your Email Address" : null} value={volunteer.email} className="input input-bordered w-full border-red-800" disabled />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="introduction" className="block text-sm font-medium text-neutral">
                    Introduction
                  </label>
                  <div className="mt-1">

                    <textarea className="textarea input-bordered border-red-800 w-full" rows={3} id="introduction"
                      name="introduction" value={introduction} placeholder={!volunteer.introduction ? "Write a few sentences about yourself." : volunteer.introduction} required disabled={disabled} onChange={onChange}></textarea>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="hobbies" className="block text-sm font-medium text-neutral">
                    Hobbies / Interests / Skills
                  </label>
                  <div className="mt-1">
                    <input type="text" id="hobbies" name="hobbies" value={hobbies} placeholder={!volunteer.hobbies.length ? "Enter your Hobbies, Interests and Skills" : volunteer.hobbies} className="input input-bordered w-full border-red-800" disabled={disabled} onChange={onChange} required />
                  </div>
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

export default VolunteerProfile;