import React from "react";
import { Switch, Route } from "react-router-dom";
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
// import Creators from "./pages/Creators/newitemcreator";
// import Creators from "./pages/Creators/editcreator";
import State from "./pages/State/state";
import Creator from "./pages/Creators/creatorshomepage";
import ItemDetails from "./pages/Shop/itemdetails";
import Profile from "./components/Profiles/Profile";
import PrivateRoute from "./auth/PrivateRoute";
import ExternalApi from "./server/external-api";
import LoggedInProfile from "./pages/Creators/loggedinprofile"
import PublicProfile from "./pages/Creators/publicprofile";
import EditCreator from "./pages/Creators/editcreator";
import AddItem from "./pages/Creators/newitemcreator";

function App() {
  // If page is loading/transitioning, display "Loading..."
  //test
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/newitemcreator" component={Creators} /> */}
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/shop/shirts" component={Shirts} />
        <Route exact path="/shop/hoodies" component={Hoodies} />
        <Route exact path="/shop/shoes" component={Shoes} />
        {/* will need to update path for public/profile to pick up a ID parameter (ex: /public/profile/:id) */}
        <Route exact path="/creators/:id" component={PublicProfile} />
        <PrivateRoute exact path="/private/profile" component={LoggedInProfile} />
        <PrivateRoute path="/external-api" component={ExternalApi} />
        <Route path={`/shop/item/:id`} component={ItemDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/state" component={State} />
        <Route exact path="/private/profile/add-item" component={AddItem} />
        <Route exact path="/creatorshomepage" component={Creator} />
        <Route exact path="/private/profile/:id" component={EditCreator} />
      </Switch>
    </>
  );
}

export default App;
