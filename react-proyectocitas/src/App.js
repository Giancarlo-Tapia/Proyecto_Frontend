import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AuthLoginScreen from './modules/auth/screens/login/AuthLoginScreen';
import PosRouter from "./modules/pos/PosRouter";
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthRegisterScreen from './modules/auth/screens/register/AuthRegisterScreen';
import HomeScreen from './modules/home/screens/HomeScreen';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={AuthLoginScreen} />
        <Route path="/register" component={AuthRegisterScreen} />
        <Route path="/pos" component={PosRouter} />
        <Route path="/" exact component={HomeScreen} />
         {/*<Route path="/" component={} /> */}
      </Switch>
      
    </BrowserRouter>
    </>
  );
};

export default App;
