import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Register from './pages/Register/register';
import Shop from './pages/Shop/shop';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/shop" component={Shop} />
      </Switch>

    </>
  )
}



export default App;


