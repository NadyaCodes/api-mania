import logo from './face-emojji-1.png';
import Navigation from './Navigation';
import XKCD from './XKCD'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To My Data Fetching App</h1>
      </header>
        <Navigation />
      <main>
        <article>Hi</article>
        <XKCD />
      </main>
    </div>
  );
}

export default App;
