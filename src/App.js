//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {
const [advice, setAdvice] = useState("");

  async function gogetthatAdvice() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      //console.log(response.data.slip.advice);
      //console.log(response.data.slip.id);
      //setAdvice(response.data.slip);
      setAdvice(response.data.slip);
      //console.log(advice);
    } catch (error) {
      console.error(error);
    }
  }
gogetthatAdvice();


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<p></p>
      </header>
    </div>
  );
}

export default App;
