import '../styles/App.css';
import { useState } from 'react';

function App() {
  
  const [omeletteItem,setOmeletteItem] = useState(false);
  
  const handleOmeletteItem = ev =>{
    setOmeletteItem(ev.target.checked);
    const itemName = ev.target.name;
    if(omeletteItem===true && itemName === 'ingredient'){
      console.log('Eres una persona concebollista');
    }else{
      console.log('Eres un robot sin paladar');
    }
  }
  
  return (
    <div className="App">
      <form>
        <h3>Selecciona los ingredientes de la tortilla de patatas:</h3>
        <div>
          <label htmlFor="omeletteoption1">
            <input
              id="omeletteoption1"
              type="checkbox"
              value="macarrones"
              name="notaningredient"
              onChange={handleOmeletteItem}
            />
            Macarrones
          </label>
        </div>
        <div>
          <label htmlFor="omeletteoption2">
            <input
              id="omeletteoption2"
              type="checkbox"
              value="patatas"
              name="ingredient"
              onChange={handleOmeletteItem}
            />
            Patatas
          </label>
        </div>
        <div>
          <label htmlFor="omeletteoption3">
            <input
              id="omeletteoption3"
              type="checkbox"
              value="nueces"
              name="notaningredient"
              onChange={handleOmeletteItem}
            />
            Nueces
          </label>
        </div>
        <div>
          <label htmlFor="omeletteoption4">
            <input
              id="omeletteoption4"
              type="checkbox"
              value="huevos"
              name="ingredient"
              onChange={handleOmeletteItem}
            />
            Huevos
          </label>
        </div>
        <div>
          <label htmlFor="omeletteoption5">
            <input
              id="omeletteoption5"
              type="checkbox"
              value="cebolla"
              name="ingredient"
              onChange={handleOmeletteItem}
            />
            Cebolla
          </label>
        </div>
        <div>
          <label htmlFor="omeletteoption6">
            <input
              id="omeletteoption6"
              type="checkbox"
              value="cerveza"
              name="notaningredient"
              onChange={handleOmeletteItem}
            />
            Cerveza
          </label>
        </div>
      </form>
      <p></p>
    </div>
  );
}
export default App;
