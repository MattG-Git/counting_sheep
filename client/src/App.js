import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TrackForm from "./pages/TrackForm";
import LoginForm from "./pages/LoginForm";
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
