import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="mt-10 bg-white p-4 rounded shadow-lg overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Gender</th>
            <th className="p-3 text-left">Languages</th>
            <th className="p-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
  {data.map((entry, index) => (
    <tr
      key={index}
      className="hover:bg-gray-100 transition duration-100 border-b border-gray-200"
    >
      <td className="p-3">{entry.firstName} {entry.lastName}</td>
      <td className="p-3">{entry.gender}</td>
      <td className="p-3">{entry.languages?.join(", ")}</td>
      <td className="p-3">{entry.email}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default DataTable;
