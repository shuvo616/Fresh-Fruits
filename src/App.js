import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Component/Admin/Admin";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import AddProduct from "./Component/AddProduct/AddProduct";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import OrderProduct from "./Component/OrderProduct/OrderProduct";
import OrderList from "./Component/OrderList/OrderList";
import MangeProduct from "./Component/MangeProduct/MangeProduct";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/Admin">
          <AddProduct></AddProduct>
          </PrivateRoute>

          <PrivateRoute path="/order">
            <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/orderProduct/:_id">
            <OrderProduct></OrderProduct>
          </PrivateRoute>

          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>

          <PrivateRoute path="/manageProduct">
            <MangeProduct></MangeProduct>
          </PrivateRoute>
         
          <Route path="/Login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
