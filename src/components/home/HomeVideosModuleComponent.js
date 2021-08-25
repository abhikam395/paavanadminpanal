import React, { Component } from 'react';
import {IoOpenOutline, IoCloseOutline} from 'react-icons/io5';
import {CgMinimize} from 'react-icons/cg';
import './homevideosmodule.scss';

const videos = [
    {id: 1, title: 'Lakshimi 0007.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 2, title: 'Shiva 0004.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 3, title: 'Lakshimi 0002.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 4, title: 'Ram 0003.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 5, title: 'Krinsha 0008.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 6, title: 'Hanuman 0005.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 7, title: 'Lakshimi 0007.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 8, title: 'Shiva 0004.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 9, title: 'Lakshimi 0002.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 10, title: 'Ram 0003.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 11, title: 'Krinsha 0008.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
    {id: 12, title: 'Hanuman 0005.0', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA1o0s0-V12Mf7dGTHvjBb7p0BOZtEiC9wg&usqp=CAU"},
]

export default class HomeVideosModuleComponent extends Component{

    constructor(){
        super();
        this.state = {
            listVisible: false
        }
        this.toggleListVisibility = this.toggleListVisibility.bind(this);
    }

    toggleListVisibility(){
        let {listVisible} = this.state;
        this.setState({listVisible: !listVisible});
    }

    renderListItem({id, title, thumbnail}){
        return (
            <li className="
                homevideosmodule__list-item 
                homevideosmodule__list-item--theme">
                <img 
                    src={thumbnail} 
                    className="homevideosmodule__image"/>
                {title}
            </li>
        )
    }

    render(){
        let {title} = this.props;
        let {listVisible} = this.state;
        return (
            <article className="homevideosmodule homevideosmodule--size">
                <div className="
                    homevideosmodule__toggle-button 
                    homevideosmodule__toggle-button--theme 
                    homevideosmodule__toggle-button--size"
                    onClick={this.toggleListVisibility}>
                    <span className="homevideosmodule__title">{title}</span>
                    {listVisible && (
                        <CgMinimize className="homevideosmodule__icon"/>
                    )}
                    {!listVisible && (
                        <IoOpenOutline className="homevideosmodule__icon"/>
                    )}
                </div>
                {listVisible && (
                    <ul className="homevideosmodule__list homevideosmodule__list--size">
                        {videos.map(item => this.renderListItem(item))}
                    </ul>
                )}
                {listVisible && (
                    <button className="homevideosmodule__view-button">View More</button>
                )}
            </article>
        )
    }
}