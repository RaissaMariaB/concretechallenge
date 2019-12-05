import React from 'react';
import Home from './pages/Home'
import Results from './pages/Results'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div >
      <Route exact= {true} path='/' component={Home}></Route>     
      <Route path='/results' component={Results}></Route>  
    </div>
  </Switch>
 </BrowserRouter>    
)}

export default App;
