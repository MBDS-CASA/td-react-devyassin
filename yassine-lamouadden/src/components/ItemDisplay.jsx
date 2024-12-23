import React from "react";

// Component to display a single item
const ItemDisplay = ({ item }) => {
  return (
    <div className="border p-4 rounded shadow-lg bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Course: {item?.course}</h2>
      <p>
        <strong>Student:</strong> {item.student.firstname}{" "}
        {item.student.lastname} (ID: {item.student.id})
      </p>
      <p>
        <strong>Date:</strong> {item.date}
      </p>
      <p>
        <strong>Grade:</strong> {item.grade}
      </p>
    </div>
  );
};

export default ItemDisplay;
