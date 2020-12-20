import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/shop";
import Cart from "./pages/Cart/cart";
import Creator from "./pages/Creators/creatorshomepage";
import ItemDetails from "./pages/Shop/itemdetails";
import PrivateRoute from "./auth/PrivateRoute";
import ExternalApi from "./server/external-api";
import LoggedInProfile from "./pages/Creators/loggedinprofile";
import PublicProfile from "./pages/Creators/publicprofile";
import EditCreator from "./pages/Creators/editcreator";
import AddItem from "./pages/Creators/newitemcreator";
import AddProfileData from "./pages/Creators/addProfileData";
import "./App.css";


function App() {
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/creators/:id" component={PublicProfile} />
        <PrivateRoute exact path="/private/profile" component={LoggedInProfile} />
        <PrivateRoute path="/external-api" component={ExternalApi} />
        <Route path={`/shop/item/:id`} component={ItemDetails} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/private/profile/add-item/" component={AddItem} />
        <Route exact path="/creatorshomepage" component={Creator} />
        <PrivateRoute exact path="/private/profile/edit/:id" component={EditCreator} />
        <PrivateRoute exact path="/private/profile/create" component={AddProfileData} />
      </Switch>
    </>
  );
}

export default App;
