//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import {ReactComponent as IconDice} from './icon-dice.svg';
import {ReactComponent as BigDivider} from './pattern-divider-desktop.svg';


function App() {
const [advice, setAdvice] = useState("");

  async function gogetthatAdvice() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip);
    } catch (error) {
      console.error(error);
    }
  }

const handleClick = (e) => {
  e.preventDefault();
  gogetthatAdvice();
}

  return (
    <>
      <div className="App">
        <div className="card">
        <p className="number">ADVICE # {advice.id}</p>
        <p className='advice'>&#8220;{advice.advice}&#8221;</p>
 
        <button type="submit" onClick={handleClick}>
        <IconDice />
        </button>

      <BigDivider/>
        </div>

      </div>  
    </>
  );
}

export default App;
