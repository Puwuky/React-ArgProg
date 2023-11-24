import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import ConfirmationDialog from './ConfirmationDialog';

const TaskList = ({ tasks, setTasks, editTask }) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    setTaskIdToDelete(taskId);
    setConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskIdToDelete);
    setTasks(updatedTasks);
    setConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmationOpen(false);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          editTask={editTask} 
        />
      ))}
      <ConfirmationDialog
        isOpen={confirmationOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        message="¿Seguro que deseas eliminar esta tarea?"
        type="delete"
      />
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskList;
