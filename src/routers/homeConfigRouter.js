import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import HomeConfigScreen from '../screens/home/HomeConfigScreen';
import HomeModuleScreen from '../screens/home/HomeModuleScreen';

export default function HomeConfigRouter(){
    return (
        <Switch>
            <Route exact path="/home-config/" component={HomeConfigScreen}/>
            <Route exact path="/home-config/create" component={HomeModuleScreen}/>
        </Switch>
    )
}