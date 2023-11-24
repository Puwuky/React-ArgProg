import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Comprar leche', completed: false },
    { id: 2, title: 'Comprar pan', completed: false },
    { id: 3, title: 'Manzanas', completed: false },
    { id: 4, title: 'Pan integral', completed: false },
    { id: 5, title: 'Mantequilla', completed: false },
    { id: 6, title: 'Salchichas', completed: false },
    { id: 7, title: 'Helado', completed: false },
    { id: 8, title: 'Arroz', completed: false },
  ]);

  useEffect(() => {
  }, [tasks]);

  const editTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Lista de Compras</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} editTask={editTask} />
    </div>
  );

}

export default App;
