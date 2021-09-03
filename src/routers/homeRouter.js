import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeArrageDataScreen from "../screens/home/HomeArrangeDataScreen";
import HomeAssignScoreScreen from "../screens/home/HomeAssignScoreScreen";
import HomeVideoScreen from "../screens/home/HomeVideoScreen";
import HomeWelcomeScreen from "../screens/home/HomeWelcomeScreen";
import PageNotFound from "../screens/PageNotFound";
import HomeConfigRouter from "./homeConfigRouter";

export default function(){
    return (
        <Switch>
            <Route exact path="/" component={HomeWelcomeScreen}/>
            <Route exact path="/arrange-data" component={HomeArrageDataScreen}/>
            <Route exact path="/assign-score" component={HomeAssignScoreScreen}/>
            <Route exact path="/home-config" component={HomeConfigRouter}/>
            <Route exact path="/videos" component={HomeVideoScreen}/>
            <Route exact path="/home-config/*" component={HomeConfigRouter}/>
        </Switch>
    )
}