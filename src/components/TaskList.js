import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, filter, updateTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  // ✅ Filter tasks before rendering
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return <p>No {filter} tasks found.</p>;
  }

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
