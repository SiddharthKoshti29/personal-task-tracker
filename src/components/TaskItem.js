
import React from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const toggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const formatDate = (iso) => {
    const date = new Date(iso);
    return date.toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
        <h3>{task.title}</h3>
        <span className={`priority ${task.priority}`}>{task.priority}</span>
      </div>

      {task.description && <p>{task.description}</p>}

      <div className="task-meta">
        <span>🕒 Created: {formatDate(task.createdAt)}</span>
        {task.dueDate && <span>📅 Due: {formatDate(task.dueDate)}</span>}
        {task.tag && <span>🏷️ {task.tag}</span>}
      </div>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>🗑️ Delete</button>
    </div>
  );
}

export default TaskItem;
