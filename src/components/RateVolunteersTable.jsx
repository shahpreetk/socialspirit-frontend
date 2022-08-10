import React from 'react'

const RateVolunteersTable = ({event}) => {
  return (
    <>
      <div className="overflow-x-auto prose prose-indigo prose-lg text-gray-700 mx-auto">
        <div className="ml-1 mb-4 mt-8">
          <div className="justify-start">
            <div className="flex items-baseline">
              <h3 className="text-xl m-0 flex-1">Volunteers Attended</h3>
              <div className="text-right flex-1 mt-4">
                <button className="btn btn-neutral btn-outline mx-auto justify-end">Rate</button>
              </div>
            </div>

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
              <th>Enter Rating
                <label>
                  <input type="text" className="ml-4 border-2 border-base-300 w-8" />
                </label>
              </th>
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
                <label>
                  <input type="text" className="ml-4 border-2 border-base-300 w-8" />
                </label>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">absent</button>
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
                <label>
                  <input type="text" className="ml-4 border-2 border-base-300 w-8" />
                </label>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">absent</button>
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
                <label>
                  <input type="text" className="ml-4 border-2 border-base-300 w-8" />
                </label>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">absent</button>
              </th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Volunteer Name</th>
              <th>Enter Rating</th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </>
  )
}

export default RateVolunteersTable