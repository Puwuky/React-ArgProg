import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/TaskForm.css';

function TaskForm({ setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), title: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
    </div>
  );
}

TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default TaskForm;
