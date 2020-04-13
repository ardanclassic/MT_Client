import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './component/RegisterPage';
import SignIn from './component/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Signup } />
        <Route path="/login" component={ SignIn } />
      </Router>
    </div>
  );
}

export default App;
