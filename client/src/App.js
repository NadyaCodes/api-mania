import logo from './face-emojji-1.png';
import Navigation from './Navigation';
import XKCD from './XKCD'
import Animals from './Animals'
import Fox from './Fox'
import Satellite from './Satellite';
import './App.css';

import { useState } from 'react'

function App() {
  const [state, setState] = useState({
    xkcd: false,
    animals: false,
    fox: false,
    satellite: false
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To My Data Fetching App</h1>
      </header>
        <Navigation state={state} setState={setState}/>
      <main>
        {state.xkcd && <XKCD />}
        {state.fox && <Fox />}
        {state.satellite && <Satellite />}
        {state.animals && <Animals />}
        
      </main>
    </div>
  );
}

export default App;
