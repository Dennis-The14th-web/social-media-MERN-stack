import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Screens/Home'
import Profile from './components/Screens/Profile'
import Signup from './components/Screens/Signup'
import Login from './components/Screens/Login'



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/signin">
      <Login />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    </BrowserRouter>
  );
}

export default App;
