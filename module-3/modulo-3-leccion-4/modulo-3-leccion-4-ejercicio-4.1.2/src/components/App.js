import { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ]);
   
  const toDoListTitle = () => {
    return 'Mi lista de tareas';
  };
  const handleIndexTask = (ev) => {
    const clickedTask = ev.currentTarget.id;
    console.log(clickedTask);
    const foundTask = tasks.find(task => task.completed === true);
  };
   
  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <li key={index} className={task.completed === true ? 'checked':''} id={index} onClick={handleIndexTask}>
          {task.task}
        </li>
      );
    });
  };
  return (
    <div>
      <h1>{toDoListTitle()}</h1>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default App;
