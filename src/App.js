import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from './Components/Detail';
import Login from './Components/Login';


function App() {
  
  return (
    <div className="App">
      <Router>
       
          <Header />
  
      <Switch>
  
         <Route extra path="/detail/:id" component = {Detail} />
          <Route extra path="/home" component = {Home} />
          <Route  path="/" component = {Login} />
      </Switch>

      
      </Router>
  
     
       </div>
  );
}

export default App;
