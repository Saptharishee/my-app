// components/NewTaskForm.js
import React, { useState } from "react";


const NewTaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    priority: 0, // Default to No Priority
    status: "Todo", // Default to Todo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ id: "", title: "", description: "", priority: 0, status: "Todo" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="id" 
        placeholder="Task ID" 
        value={task.id} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="title" 
        placeholder="Task Title" 
        value={task.title} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="description" 
        placeholder="Task Description" 
        value={task.description} 
        onChange={handleChange} 
        required 
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value={0}>No Priority</option>
        <option value={1}>Low Priority</option>
        <option value={2}>Medium Priority</option>
        <option value={3}>High Priority</option>
        <option value={4}>Urgent Priority</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
