import 'normalize.css';
import 'assets/css/global.css';
import Home from 'screens/Home/Home';


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

 /*const [loading, setLoading] = useState(false);
  console.log(loading);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }*/
  return <Home />;
}

export default App;
