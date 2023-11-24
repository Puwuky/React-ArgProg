import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TaskItem({ task, completeTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const [editedMessage, setEditedMessage] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedMessage);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
          />
          <div className="task-buttons">
            <button className="save-btn" onClick={handleSave}>
              Guardar
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <div className="task-buttons">
            <button
              className="complete-btn"
              onClick={() => {
                completeTask(task.id);
              }}
            >
              Completar
            </button>
            <button className="edit-btn" onClick={handleEdit}>
              Editar
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskItem;
