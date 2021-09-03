import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeTabs from '../../components/home/HomeTabs';
import HomeConfigModules from './config/HomeConfigModules';
import HomeConfigRankOrder from './config/HomeConfigRankOrder';
import HomeConfigXYZ from './config/HomeConfigXZY';

import './homeconfig.scss';

const TABS = {
    MODULES: 'MODULES',
    RANKORDER: 'RANKORDER',
    XYZ: 'XYZ'
}

export default class HomeConfigScreen extends Component{

    constructor(){
        super();
        this.state = {
            currentPage: TABS.MODULES
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(name){
        this.setState({currentPage: name});
    }

    renderTabView(tab){
        switch(tab){
            case TABS.MODULES: return <HomeConfigModules />
            case TABS.RANKORDER: return <HomeConfigRankOrder />
            case TABS.XYZ: return <HomeConfigXYZ />
            default: return <HomeConfigModules />
        }
    }

    render(){
        let {currentPage} = this.state;
        return (
            <section className="homeconfig homeconfig--size">
                <div className="homeconfig__row">
                    <h1 className="homeconfig__title">HomePage</h1>
                    <Link className="homeconfig__add-button" to="/home-config/create">Add New Module</Link>
                </div>
                <div className="homeconfig__tabs-container homeconfig__tabs-container--size">
                    <HomeTabs changeTab={this.changeTab} currentTab={currentPage}/>
                </div>
                {this.renderTabView(currentPage)}
            </section>
        )
    }
}