import React from 'react';
import noPriorityIcon from "../icons_FEtask/No-priority.svg"; // Ensure this path is correct
import { getStatusIcon, getPriorityIcon, getPriorityLabel } from './utils'; // Adjust path as needed to where these functions are defined

const Card = ({ ticket, users }) => {
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
};

export default Card;
