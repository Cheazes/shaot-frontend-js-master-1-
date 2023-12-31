import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Employee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`/employee/${id}`)
      .then(response => response.json())
      .then(data => setEmployee(data))
      .catch(error => console.error("Error fetching employee data:", error));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
      {employee ? (
        <div className="bg-white p-4 rounded shadow">
          <p className="mb-2"><span className="font-semibold">ID:</span> {employee.id}</p>
          <p className="mb-2"><span className="font-semibold">Name:</span> {employee.name}</p>
        </div>
      ) : (
        <p>Loading employee data...</p>
      )}
    </div>
  );
};

export default Employee;