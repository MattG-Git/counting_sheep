import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TrackForm from "./pages/TrackForm";
import LoginForm from "./pages/LoginForm";
import './App.css';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
