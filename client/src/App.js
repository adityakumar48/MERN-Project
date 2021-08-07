import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Navbar />
      <Route exact path='/'>
       <Home  />
      </Route>
      <Route path='/about'>
       <About />
      </Route>
      <Route path='/contact'>
       <Contact />
      </Route>
      <Route path='/signin'>
       <Login />
      </Route>
      <Route path='/signup'>
       <Signup />
      </Route>
      
    </div>
  );
}

export default App;
