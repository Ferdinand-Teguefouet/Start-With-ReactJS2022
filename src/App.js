import 'normalize.css';
import { useState } from 'react';
import "./assets/css/global.css";
import Button from './components/units/Button/Button';



function App() {
  /*const handleConsoleLog = (color) => {
      console.log("Hi there! "+ color);
  }
  const handleAlert = (color) => {
    alert('Hi there! ' + color);
  }*/

  // Login
  // LOADING FALSE-INITIAL
  // LOADING TRUE-5seconds
  // LOADING FALSE-SUCCESS
  // LOADING FALSE-FAILURE

  const [loading, setLoading] = useState(false);
  console.log(loading);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return <div className="App">
      <p>Welcome back, to login, please click on the button.</p>
      <Button text="Login" loadingText="Login in.." isLoading={loading} onClick={handleLogin} />
    </div>;
}

export default App;
