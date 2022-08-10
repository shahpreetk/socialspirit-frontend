import React from 'react'

const VolunteersInterestedTable = ({event}) => {
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
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>

                  </div>
                </div>
              </td>
              <td>
                5
              </td>
              <td>teaching, painting</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                  </div>
                </div>
              </td>
              <td>
                1.5
              </td>
              <td>running</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                  </div>
                </div>
              </td>
              <td>
                3.2
              </td>
              <td>dancing, reading</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Yancy Tear</div>

                  </div>
                </div>
              </td>
              <td>
                4.3
              </td>
              <td>cycling, knitting</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
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
  )
}

export default VolunteersInterestedTable