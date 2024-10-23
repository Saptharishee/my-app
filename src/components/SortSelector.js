import React from "react";

const SortSelector = ({ sorting, setSorting }) => {
  return (
    <div className="sort-selector">
      <label htmlFor="sorting">Sort by:</label>
      <select
        id="sorting"
        value={sorting}
        onChange={(e) => {
          setSorting(e.target.value);
          localStorage.setItem("sorting", e.target.value); // Persist sorting in localStorage
        }}
      >
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortSelector;
