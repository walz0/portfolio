import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}

      <Router>
        <Switch>
          <Route path="/about" />
          <Route path="/contact" />
          <Route path="/blog" />
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
