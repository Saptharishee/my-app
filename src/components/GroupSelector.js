import React from "react";

const GroupSelector = ({ grouping, setGrouping }) => {
  return (
    <div className="group-selector">
      <label htmlFor="grouping">Group by:</label>
      <select
        id="grouping"
        value={grouping}
        onChange={(e) => {
          setGrouping(e.target.value);
          localStorage.setItem("grouping", e.target.value); // Persist grouping in localStorage
        }}
      >
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupSelector;
