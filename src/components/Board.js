import React from "react";
import "./Board.css";
import addTaskIcon from "../icons_FEtask/add.svg"; // Adjust the path as needed
import moreOptionsIcon from "../icons_FEtask/3 dot menu.svg"; // Adjust the path as needed
import todoIcon from "../icons_FEtask/To-do.svg"; // Adjust the path as needed
import inProgressIcon from "../icons_FEtask/in-progress.svg"; // Adjust the path as needed
import backlogIcon from "../icons_FEtask/Backlog.svg"; // Adjust the path as needed
import doneIcon from "../icons_FEtask/Done.svg"; // Adjust the path as needed
import cancelledIcon from "../icons_FEtask/Cancelled.svg"; // Adjust the path as needed

import urgentPriorityIcon from "../icons_FEtask/SVG - Urgent Priority colour.svg"; // Ensure this path is correct
import highPriorityIcon from "../icons_FEtask/Img - High Priority.svg"; // Ensure this path is correct
import mediumPriorityIcon from "../icons_FEtask/Img - Medium Priority.svg"; // Ensure this path is correct
import lowPriorityIcon from "../icons_FEtask/Img - Low Priority.svg"; // Ensure this path is correct
import noPriorityIcon from "../icons_FEtask/No-priority.svg"; // Ensure this path is correct

const getPriorityIcon = (priority) => {
    switch (priority) {
        case 4:
            return urgentPriorityIcon; // Urgent Priority icon
        case 3:
            return highPriorityIcon; // High Priority icon
        case 2:
            return mediumPriorityIcon; // Medium Priority icon
        case 1:
            return lowPriorityIcon; // Low Priority icon
        default:
            return noPriorityIcon; // No Priority icon
    }
};

// Function to get the priority value from the key
const getPriorityValueFromKey = (key) => {
    switch (key) {
        case "Urgent Priority": return 4;
        case "High Priority": return 3;
        case "Medium Priority": return 2;
        case "Low Priority": return 1;
        default: return 0; // Default for "No Priority"
    }
};

const getStatusIcon = (status) => {
    switch (status) {
        case "Todo":
            return todoIcon;
        case "In progress":
            return inProgressIcon;
        case "Backlog":
            return backlogIcon;
        case "Done":
            return doneIcon;
        case "Cancelled":
            return cancelledIcon;
        default:
            return "";
    }
};

const getPriorityLabel = (priority) => {
    switch (priority) {
        case 4:
            return "Urgent Priority";
        case 3:
            return "High Priority";
        case 2:
            return "Medium Priority";
        case 1:
            return "Low Priority";
        default:
            return "No Priority";
    }
};

const Board = ({ tickets, users, grouping, sorting }) => {
    // Group tickets based on the selected grouping method
    const groupTickets = (tickets) => {
        if (grouping === "status") {
            const groupedByStatus = {
                Todo: [],
                "In progress": [],
                Backlog: [],
                Done: [],
                Cancelled: [],
            };
            tickets.forEach((ticket) => {
                if (groupedByStatus[ticket.status]) {
                    groupedByStatus[ticket.status].push(ticket);
                }
            });
            return groupedByStatus;
        }
        if (grouping === "user") {
            const groupedByUser = {};
            tickets.forEach((ticket) => {
                if (!groupedByUser[ticket.userId]) {
                    groupedByUser[ticket.userId] = [];
                }
                groupedByUser[ticket.userId].push(ticket);
            });
            return groupedByUser;
        }
        if (grouping === "priority") {
            const groupedByPriority = {
                "No Priority": [],
                "Urgent Priority": [],
                "High Priority": [],
                "Medium Priority": [],
                "Low Priority": [],
            };
            tickets.forEach((ticket) => {
                const priorityLabel = getPriorityLabel(ticket.priority);
                groupedByPriority[priorityLabel].push(ticket);
            });
            return groupedByPriority;
        }
        return {};
    };

    // Sort tickets based on the selected sorting method
    const sortedTickets = (tickets) => {
        if (sorting === "priority") {
            return [...tickets].sort((a, b) => b.priority - a.priority);
        } else if (sorting === "title") {
            return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
        }
        return tickets;
    };

    // Group tickets based on the selected grouping method
    const groupedTickets = groupTickets(tickets);

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((key) => (
                <div key={key} className="kanban-column">
                    <div className="kanban-column-header">
                        {grouping === "priority" ? (
                            <>
                                <img
                                    src={getPriorityIcon(getPriorityValueFromKey(key))} // Display the priority icon
                                    alt="Priority Icon"
                                    className="priority-icon"
                                />
                                {key}
                            </>
                        ) : (
                            <>
                                <img src={getStatusIcon(key)} alt={`${key} icon`} className="status-icon" />
                                {grouping === "user" ? (users[key]?.name || key) : key}
                            </>
                        )}
                        <div className="column-controls">
                            <img src={addTaskIcon} alt="Add Task" className="add-task-icon" />
                            <img src={moreOptionsIcon} alt="More Options" className="more-options-icon" />
                        </div>
                    </div>
                    <div className="kanban-tickets">
    {sortedTickets(groupedTickets[key]).map((ticket) => {
        console.log("Rendering ticket:", ticket); // Log ticket data for debugging
        return (
            <div key={ticket.id} className="kanban-card">
    {/* First Row: User ID and Profile Icon */}
    <div className="user-info">
        <span className="user-id">{users[ticket.userId]?.name || ticket.userId}</span>
        <img
            src={noPriorityIcon} // Use the appropriate profile icon here
            alt="Profile Icon"
            className="profile-icon"
        />
    </div>
    {/* Second Row: Status Icon and Title */}
    <div className="status-title">
        <img
            src={getStatusIcon(ticket.status)}
            alt={`${ticket.status} icon`}
            className="status-icon"
        />
        <span className="kanban-card-title">{ticket.title}</span>
    </div>
    {/* Third Row: Priority Icon and Tags */}
    <div className="tags">
        <img
            src={getPriorityIcon(ticket.priority)} // Get the icon based on ticket priority
            alt={getPriorityLabel(ticket.priority)} // Use a descriptive alt text
            className="priority-icon" // Apply CSS class for styling
        />
        {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
        ))}
    </div>
</div>

            
        );
    })}
</div>

                </div>
            ))}
        </div>
    );
};

export default Board;
