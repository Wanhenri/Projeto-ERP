import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleMenu from "../src/component/MenuDrop" 
import Home from "../src/pages/Home";
import Data from "../src/pages/Data";
import Profile from "../src/pages/Profile";
import Product from "../src/pages/Product";
import Vendor from "../src/pages/Vendor";


export default function Router() {
    const routes = [
      {
        name: "Home",
        exact: true,
        component: Home,
        path: "/"
      },
      {
        name: "Data",
        exact: true,
        component: Data,
        path: "/data"
      },
      {
        name: "Profile",
        exact: true,
        component: Profile,
        path: "/profile"
      },
      {
        name: "Product",
        exact: true,
        component: Product,
        path: "/product"
      },
      {
        name: "Vendor",
        exact: true,
        component: Vendor,
        path: "/vendor"
      }
    ];
    return (
      // exemplo da rota sem o spread operator(...):
      // <Route key={route.name} name={route.name} path={route.path} exact={route.exact} component={route.component}></Route>
      <BrowserRouter>
        <SimpleMenu />
        <Switch>
          {routes.map(route => (
            <Route key={route.name} {...route}></Route>
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
  

