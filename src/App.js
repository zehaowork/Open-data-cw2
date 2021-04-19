import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Donate from './pages/Donate/Donate';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact"  component={Contact} />
          <Route path="/donate" component={Donate} />
         
        
        </Switch>
      </div>
    </Router>

  );
}

export default App;
