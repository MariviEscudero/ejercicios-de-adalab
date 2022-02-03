import { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: '0',task: 'Comprar harina, jamón y pan rallado', completed: false },
    {id: '1',task: 'Hacer croquetas ricas', completed: false },
    {id: '2',task: 'Ir a la puerta de un gimnasio', completed: false },
    {id: '3',task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const toDoListTitle = () => {
    return 'Mi lista de tareas';
  };
  //debugger;
  const handleIndexTask = (ev) => {
    const clickedTask = ev.currentTarget.id;
    console.log(clickedTask);
    const foundTask = tasks.find((task) => (task.id === clickedTask));
    foundTask.completed = !foundTask.completed;
    console.log(foundTask);
    setTasks([...tasks]);
  };
  console.log(tasks);

  const renderTasks = () => {
    return tasks.map((task) => {
      return (
        <li
          key={task.id}
          className={task.completed === true ? 'checked' : ''}
          id={task.id}
          onClick={handleIndexTask}
        >
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
