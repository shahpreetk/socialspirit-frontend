import React from 'react';
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { V_PROFILE } from "../constants/routes";

const VolunteersInterestedTable = ({ event }) => {

  const { allvolunteers } = useSelector((state) => state.volunteerauth);

  return (
    <>
      <div className="overflow-x-auto prose prose-indigo prose-lg text-gray-700 mx-auto">
        <div className="ml-1 mb-4 mt-8">
          <div className="justify-start">
            <h3 className="text-lg m-0">Volunteers Interested</h3>
            <div className="flex">
              <p className="flex-1">
                Maximum Volunteers Needed: {event.maxVolunteers}
              </p>
              <div className="text-right flex-1 mt-4">
                <button className="btn btn-neutral btn-outline mx-auto justify-end">Accept</button>
              </div>
            </div>
            <p className="m-0">Volunteers Selected: 0</p>

          </div>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ml-4" />
                </label>
              </th>
              <th>Volunteer Name</th>
              <th>Average Rating</th>
              <th>Hobbies, Interests, Skills</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allvolunteers && allvolunteers.map(eachVolunteer => (
              <tr key={eachVolunteer._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{eachVolunteer.name}</div>

                    </div>
                  </div>
                </td>
                <td>
                  {eachVolunteer.avgRating}
                </td>
                <td>{eachVolunteer.hobbies.map(hobby => hobby + " ")}</td>
                <th>
                  <Link
                    to={`${V_PROFILE}/${eachVolunteer._id}`}
                    className="btn btn-ghost btn-xs">details</Link>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Volunteer Name</th>
              <th>Average Rating</th>
              <th>Hobbies, Interests, Skills</th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </>
  );
};

export default VolunteersInterestedTable;