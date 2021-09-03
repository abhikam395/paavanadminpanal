import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeModuleTabs from '../../components/home/homeModuleTabs';
import './homemodule.scss';
import HomeModuleContent from './HomeModuleContent';
import HomeModuleProperties from './HomeModuleProperties';

const TABS = {
    PROPERIES: 'PROPERTIES',
    CONTENT: 'CONTENT',
}

export default class HomeModuleScreen extends Component{

    constructor(){
        super();
        this.state = {
            currentPage: TABS.PROPERIES
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(name){
        this.setState({currentPage: name});
    }

    renderTabView(tab){
        switch(tab){
            case TABS.PROPERIES: return <HomeModuleProperties />
            case TABS.CONTENT: return <HomeModuleContent />
            default: return <HomeModuleProperties />
        }
    }

    render(){
        let {currentPage} = this.state;
        return (
            <section className="homemodule homemodule--size">
                <div className="homemodule__row">
                    <h1 className="homemodule__title">Create / Edit Module</h1>
                    <Link className="homemodule__add-button" to="/home-config/create">Add New Module</Link>
                </div>
                <div className="homemodule__tabs-container homemodule__tabs-container--size">
                    <HomeModuleTabs changeTab={this.changeTab} currentTab={currentPage}/>
                </div>
                {this.renderTabView(currentPage)}
            </section>
        )
    }
}