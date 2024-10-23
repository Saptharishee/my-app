import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupSelector from "./components/GroupSelector"; // Make sure these are your actual paths
import SortSelector from "./components/SortSelector";   // Make sure these are your actual paths
import Board from "./components/Board";                  // Make sure these are your actual paths
import displayIcon from "./icons_FEtask/Display.svg";   // Path to your display icon
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState({});
  const [grouping, setGrouping] = useState(localStorage.getItem("grouping") || "status");
  const [sorting, setSorting] = useState(localStorage.getItem("sorting") || "priority");
  const [showSelectors, setShowSelectors] = useState(false); // Control visibility of selectors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        setTickets(data.tickets);

        const userMap = {};
        data.users.forEach(user => userMap[user.id] = user.name);
        setUsers(userMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to toggle the visibility of selectors
  const toggleSelectors = () => {
    setShowSelectors(!showSelectors);
  };

  return (
    <div className="app-container">
      <button className="display-button" onClick={toggleSelectors}>
        <img src={displayIcon} alt="Display" className="display-icon" /> Display
      </button>

      {showSelectors && (
        <div className="controls">
          <GroupSelector grouping={grouping} setGrouping={setGrouping} />
          <SortSelector sorting={sorting} setSorting={setSorting} />
        </div>
      )}

      <Board tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
