import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Register from "./pages/Register/register";
import Shop from "./pages/Shop/shop";
import Cart from "./pages/Cart/cart";
import Hats from "./pages/Hats/hats";
import Shirts from "./pages/Shirts/shirts";
import Hoodies from "./pages/Hoodies/hoodies";
import Shoes from "./pages/Shoes/shoes";
import Creators from "./pages/Creators/newitemcreator";
import State from "./pages/State/state";
import AddItem from "./pages/Add-Item/add-item";
import LoginButton from "./components/Buttons/LoginButton";
import LogoutButton from "./components/Buttons/LogoutButton";
import Creator from "./pages/Creators/creatorshomepage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

 
  // If page is loading/transitioning, display "Loading..."
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar>
        {/* If user is logged in, Logout button will display, else Login Button */}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/newitemcreator" component={Creators} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/shop/shirts" component={Shirts} />
        <Route exact path="/shop/hoodies" component={Hoodies} />
        <Route exact path="/shop/shoes" component={Shoes} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/state" component={State} />
        <Route exact path="/add-item" component={AddItem} />
        <Route exact path="/creatorshomepage" component={Creator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
