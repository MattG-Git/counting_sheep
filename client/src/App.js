import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TrackForm from "./pages/TrackForm";
import LoginForm from "./pages/LoginForm";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route 
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<LoginForm />}
          />
          <Route
            path="/track"
            element={<TrackForm />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
