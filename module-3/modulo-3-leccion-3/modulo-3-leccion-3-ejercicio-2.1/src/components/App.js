import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const [originalText, setOriginalText] = useState('');
  let [translatedText, setTranslatedText] = useState('');


  const handleOriginalText = (ev) => {
    setOriginalText(ev.target.value);
    translatedText = originalText.replace(/[aeiou]/gi, 'i');
    setTranslatedText(translatedText);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="originaltext">
          <textarea
            name="originaltext"
            id="originaltext"
            cols="30"
            rows="10"
            value={originalText}
            onChange={handleOriginalText}
          ></textarea>
        </label>

        <label htmlFor="translatedtext">
          <textarea
            name="translatedtext"
            id="originaltext"
            cols="30"
            rows="10"
            readOnly
            value={translatedText}
          ></textarea>
        </label>
      </form>
    </div>
  );
};
export default App;
