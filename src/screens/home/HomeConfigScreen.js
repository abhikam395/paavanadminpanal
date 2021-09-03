import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeTabs from '../../components/home/HomeTabs';
import './homeconfig.scss';

export default class HomeConfigScreen extends Component{
    render(){
        return (
            <section className="homeconfig homeconfig--size">
                <div className="homeconfig__row">
                    <h1 className="homeconfig__title">HomePage</h1>
                    <Link className="homeconfig__add-button" to="/home-config/create">Add New Module</Link>
                </div>
                <div className="homeconfig__tabs-container homeconfig__tabs-container--size">
                    <HomeTabs />
                </div>
            </section>
        )
    }
}