import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
            <Route path="/" element={<Home />}>
              {/*<Route path="blog" element={} />
              <Route path="contact" element={} />*/}
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
