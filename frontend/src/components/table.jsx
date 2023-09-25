import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
   const Navigate = useNavigate()
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:4000/table").then((resposne) => {
      setData(resposne.data);
    }, []);
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-semibold">Survey Data</h1>
        </div>
        <div className="flex justify-end mb-10">
          <button
            className="border px-3 py-2 rounded-xl bg-blue-600 text-white uppercase font-bold"
            onClick={() => {
               Navigate("/")
            }}
          >
            Submit Survey
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Skills
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Education
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                  </tr>
                </thead>
                {data.map((details) => (
                  <tr className="bg-white" key={details._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {details.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {details.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ul>
                        {Object.entries(details.skills).map(
                          ([skill, value]) => (
                            <li key={skill}>{value ? skill : null}</li>
                          )
                        )}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {details.education}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {details.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {details.phoneNumber}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
