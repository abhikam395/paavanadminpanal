import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import PageNotFound from "../screens/PageNotFound";

export default function(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/login" component={LoginScreen}/>
                <Route exact path="/*" component={HomeScreen}/>
                <Route path="*" component={PageNotFound}></Route>
            </Switch>
        </Router>
    )
}