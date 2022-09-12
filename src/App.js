//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  async function getAdvice() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      console.log(response);
      console.log("hi");
    } catch (error) {
      console.error(error);
    }
  }

  getAdvice();


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
