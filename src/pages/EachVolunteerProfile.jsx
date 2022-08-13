import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { HOME } from "../constants/routes";

const EachVolunteerProfile = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { organisation } = useSelector((state) => state.organisationauth);

  const { allvolunteers, isLoading, isError, message } = useSelector((state) => state.volunteerauth);

  useEffect(() => {
    const matchedVolunteer = allvolunteers.filter((oneVolunteer) => {
      return oneVolunteer._id === params.id;
    });
    if (matchedVolunteer.length > 0) {
      // @ts-ignore
      setProfile(matchedVolunteer[0]);
      setLoading(false);
    }

    if (isError) {
      toast.error(message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (!organisation) {
    navigate(HOME);
  }

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="max-w-2xl md:mx-auto mx-5">
        <form className="space-y-8 mt-10">
          <div>
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium ">Volunteer Profile</h3>
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
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <p>{profile.name}</p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral">
                    Avg Rating
                  </label>
                  <div className="mt-1">
                    <p>{profile.avgRating}</p>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral">
                    Email address
                  </label>
                  <div className="mt-1">
                    <p>{profile.email}</p>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="introduction" className="block text-sm font-medium text-neutral">
                    Introduction
                  </label>
                  <div className="mt-1">
                    <p>{profile.introduction}</p>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="hobbies" className="block text-sm font-medium text-neutral">
                    Hobbies / Interests / Skills
                  </label>
                  <div className="mt-1">
                    <p>{profile.hobbies.map(hobby => {
                      return hobby + " ";
                    })}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  );

};

export default EachVolunteerProfile;