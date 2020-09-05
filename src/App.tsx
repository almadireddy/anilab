import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>

        <Switch>
          <Route path="/projects">
            <p>ho</p>
          </Route>

          <Route path="/">
            <Main>
            </Main>
          </Route>

        </Switch> 
      </Router>
   </div>
  );
}

export default App;
