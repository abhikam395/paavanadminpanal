import React, { Component } from 'react';
import './homewelcome.scss';

export default class HomeWelcomeScreen extends Component{
    render(){
        return (
            <section className="homewelcome homewelcome--size homewelcome--theme">
                <h1 className="homewelcome__title">
                    Welcome to Paavan Admin Panel
                </h1>
            </section>
        )
    }
}