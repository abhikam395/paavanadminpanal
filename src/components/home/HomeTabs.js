import React, { Component } from 'react';
import './hometabs.scss';

const TABS = {
    MODULES: 'MODULES',
    RANKORDER: 'RANKORDER',
    XYZ: 'XYZ'
}

export default class HomeTabs extends Component{

    constructor(){
        super();
        this.state = {
            currentTab: TABS.MODULES
        }
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(name){
        this.setState({currentTab: name});
    }

    render(){
        let {currentTab} = this.state;
        return (
            <section className="hometabs hometabs--size">
                <article className="hometabs__header">
                    <div 
                        onClick={() => this.selectTab(TABS.MODULES)}
                        className={`hometabs__item ${currentTab === TABS.MODULES? "hometabs__item--active": null}`}>
                        <h3 className="hometabs__item-title">Modules</h3>
                    </div>
                    <div
                        onClick={() => this.selectTab(TABS.RANKORDER)} 
                        className={`hometabs__item ${currentTab === TABS.RANKORDER? "hometabs__item--active": null}`}>
                        <h3 className="hometabs__item-title">Rank Order</h3>
                    </div>
                    <div
                        onClick={() => this.selectTab(TABS.XYZ)} 
                        className={`hometabs__item ${currentTab === TABS.XYZ? "hometabs__item--active": null}`}>
                        <h3 className="hometabs__item-title">XZY</h3>
                    </div>
                </article>
            </section>
        )
    }
}