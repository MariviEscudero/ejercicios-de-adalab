import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  // Estados

  const [series, setSeries] = useState([
    { id: '123', isFav: false, name: 'Juego de tronos' },
    { id: '456', isFav: false, name: 'Las chicas Gilmore' },
    { id: '678', isFav: false, name: 'Gambita de Dama' },
  ]);

  const [favorites, setFavorites] = useState([]);

  // Eventos

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const findSerie = series.find((serie) => serie.id === clickedSerieId);
    const isFavoriteSerie = favorites.findIndex(
      (favorite) => favorite.id === clickedSerieId
    );
    if (isFavoriteSerie !== -1) {
      findSerie.isFav = !findSerie.isFav;
      favorites.splice(isFavoriteSerie, 1);
      setFavorites([...favorites]);
    } else {
      findSerie.isFav = !findSerie.isFav;
      setFavorites([...favorites, findSerie]);
    }
  };
  console.log(favorites);

  const renderSeries = () => {
    return series.map((serie) => {
      return (
        <li
          key={serie.id}
          className={serie.isFav ? 'checked' : ''}
          id={serie.id}
          onClick={handleFavorite}
        >
          <h2>{serie.name}</h2>
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Lista de series:</h1>

      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;
