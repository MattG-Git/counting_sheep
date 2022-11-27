import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TrackForm from "./pages/TrackForm";
import LoginForm from "./pages/LoginForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
      <TrackForm />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
