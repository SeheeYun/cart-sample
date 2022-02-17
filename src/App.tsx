import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <button>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div>윤세희</div>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
