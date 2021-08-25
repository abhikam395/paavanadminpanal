import React, { Component } from 'react';
import HomeVideosModuleComponent from '../../components/home/HomeVideosModuleComponent';
import './homeassignscore.scss';

export default class HomeAssignScoreScreen extends Component{
    render(){
        return (
            <section className="homeassignscore homeassignscore--size homeassignscore--theme">
                <h1 className="homeassignscore__title">Assign Entity Scores</h1>
                <HomeVideosModuleComponent title="Video Scores"/>
                <HomeVideosModuleComponent title="Channel Scores"/>
                <HomeVideosModuleComponent title="God Scores"/>
                <button className="homeassignscore__save-button">Save</button>
            </section>
        )
    }
}