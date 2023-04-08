import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Product from './components/Product';
import ImageAvatars from './components/logo';
import SearchBar from './components/SearchBar';
// import App from './components/MDBICON';

function App() {
  return (
    <div className="App">
    
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
