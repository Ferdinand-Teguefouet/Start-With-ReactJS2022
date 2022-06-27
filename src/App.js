import 'normalize.css';
import 'assets/css/global.css';
import Home from 'screens/Home/Home';
import Contact from 'screens/Contact/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Blog from 'screens/Blog/Blog';


function App() {
    return(
      <Router>      
        <Routes>          
          <Route  exact path="/" element={<Home />} />
          <Route  exact path="/contact" element={<Contact />} />
          <Route  exact path="/blog" element={<Blog />} />
        </Routes>
    </Router>
    );
}

export default App;
