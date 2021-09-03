import React, { Component } from 'react';
import HomeVideosModuleComponent from '../../components/home/HomeVideosModuleComponent';
import './homearrangedata.scss';

export default class HomeArrangeDataScreen extends Component{
    render(){
        return (
            <section className="homearrangedata homearrangedata--size homearrangedata--theme">
                <h1 className="homearrangedata__title">Arrange App Data</h1>
                <HomeVideosModuleComponent title="Home Screen"/>
                <button className="homearrangedata__save-button">Save</button>
            </section>
        )
    }
}