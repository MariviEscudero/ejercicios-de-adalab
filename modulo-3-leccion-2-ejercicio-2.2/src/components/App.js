import { useState } from 'react';
import '../styles/App.scss';

const App = () => {

  const [classChange, setClassChange] = useState('');
  const [textMode, setTextMode] = useState();
  

  const handleClick = (ev) => {
    ev.preventDefault();
    if(classChange === ''){
      setClassChange('changecolors');
      setTextMode('Tienes activado el dark mode');
    }else{
      setClassChange('');
      setTextMode('');
    }
  }

  return (
    <div className={`App ${classChange}`}>
      <button onClick = {handleClick}>Activar el dark mode</button>
      <p>{textMode}</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sint, neque corrupti in nulla est quam perspiciatis cupiditate quasi mollitia esse repellendus, dolor, dolores repellat labore laudantium odio ullam aliquam.</p>
    </div>
  );
}
export default App;
