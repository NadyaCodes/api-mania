import logo from './face-emojji-1.png';
import Navigation from './Navigation';
import XKCD from './XKCD'
import Animals from './Animals'
import './App.css';

import { useState } from 'react'

function App() {
  const [state, setState] = useState({
    xkcd: false,
    animals: false
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To My Data Fetching App</h1>
      </header>
        <Navigation state={state} setState={setState}/>
      <main>
        <article>Hi</article>
        {state.xkcd && <XKCD />}
        {state.animals && <Animals />}
      </main>
    </div>
  );
}

export default App;
