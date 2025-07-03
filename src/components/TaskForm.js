// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      dueDate,
      tag: tag.trim(),
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setTag('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="📝 Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="🗒️ Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <input
        type="text"
        placeholder="🏷️ Category (e.g. Work, Personal)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low 🔵</option>
        <option value="medium">Medium 🟡</option>
        <option value="high">High 🔴</option>
      </select>

      <button type="submit">Add Task ➕</button>
    </form>
  );
}

export default TaskForm;
