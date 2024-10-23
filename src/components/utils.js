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

export const getStatusIcon = (status) => {
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

export const getPriorityIcon = (priority) => {
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

export const getPriorityLabel = (priority) => {
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
