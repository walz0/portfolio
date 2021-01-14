import logo from './logo.svg';
import Navbar from './components/Navbar'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Cascade from './components/Cascade';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Switch>
          <Route path="/about" />
          <Route path="/contact" />
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
