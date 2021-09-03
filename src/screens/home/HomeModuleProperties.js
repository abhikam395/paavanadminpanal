import React, { Component } from 'react';
import './homemoduleproperties.scss';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import DropDownIcon from '../../components/common/DropDownIcon';

const CARD_TYPES = {
    LARGE_RECTANGLE: "LARGE_RECTANGLE",
    MEDIUM_SQUARE: "MEDIUM_SQUARE",
    LARGE_SQUARE: "LARGE_SQUARE",
    SMALL_SQUARE: "SMALL_SQUARE",
    HORIZONTAL_RECTANGLE: "HORIZONTAL_RECTANGLE",
    MEDIUM_RECTANGLE: "MEDIUM_RECTANGLE",
    VERTICAL_RECTANGLE: "VERTICAL_RECTANGLE",
    CIRCLE: "CIRCLE",
    SMALL_RECTANGLE: "SMALL_RECTANGLE"
}

const moduleCardLayouts = [
    {id: 1, name: 'Large Rectangle', value: CARD_TYPES.LARGE_RECTANGLE},
    {id: 2, name: 'Medium Square', value: CARD_TYPES.MEDIUM_SQUARE},
    {id: 3, name: 'Large Square', value: CARD_TYPES.LARGE_SQUARE},
    {id: 4, name: 'Small Square', value: CARD_TYPES.SMALL_SQUARE},
    {id: 5, name: 'Horizontal Rectangle', value: CARD_TYPES.HORIZONTAL_RECTANGLE},
    {id: 6, name: 'Medium Rectangle', value: CARD_TYPES.MEDIUM_RECTANGLE},
    {id: 7, name: 'Vertical Rectangle', value: CARD_TYPES.VERTICAL_RECTANGLE},
    {id: 8, name: 'Circle', value: CARD_TYPES.CIRCLE},
    {id: 9, name: 'Small Rectangle', value: CARD_TYPES.SMALL_RECTANGLE},
]

const STACKS = {
    SLIDER: "SLIDER",
    HORIZONTAL_SCROLL: "HORIZONTAL_SCROLL",
    THREE_COLUMN_LAYOUT: "THREE_COLUMN_LAYOUT",
    TWO_COLUMN_LAYOUT: "TWO_COLUMN_LAYOUT",
    HEADER: 'HEADER'
}

const cardStacks = [
    {id: 1, name: 'Slider', value: STACKS.SLIDER},
    {id: 2, name: 'Horizontal Scroll', value: STACKS.HORIZONTAL_SCROLL},
    {id: 3, name: 'Three Column Layout', value: STACKS.THREE_COLUMN_LAYOUT},
    {id: 4, name: 'Two Column Layout', value: STACKS.TWO_COLUMN_LAYOUT},
    {id: 5, name: 'Header', value: STACKS.HEADER},
]

export default class HomeModuleProperties extends Component{

    constructor(){
        super();
        this.state = {
            moduleCardLayout: {name: '', value: ''},
            cardStack: {name: '', value: ''}
        }
        this.selectModuleCardLayout = this.selectModuleCardLayout.bind(this);
        this.selectCardStack = this.selectCardStack.bind(this);
    }

    getModuleCardLayoutName(value){
        return moduleCardLayouts.filter((item) => item.value == value)[0].name
    }

    getCardStackName(value){
        return cardStacks.filter((item) => item.value == value)[0].name
    }

    selectModuleCardLayout(item){
        let {value} = item.target;
        this.setState({moduleCardLayout: {value: value, name: this.getModuleCardLayoutName(value)}});
    }

    selectCardStack(item){
        let {value} = item.target;
        this.setState({cardStack: {value: value, name: this.getCardStackName(value)}});
    }

    render(){
        let {moduleCardLayout, cardStack} = this.state;
        return (
            <section className="homemoduleproperties homemoduleproperties--size">
                <form className="homemoduleproperties__form homemoduleproperties__form--size">
                    <div className="homemoduleproperties__input-container homemoduleproperties__input-container--size">
                        <label className="homemoduleproperties__label">Module Title</label>
                        <input className="homemoduleproperties__input homemoduleproperties__input--size"/>
                    </div>
                    <div className="homemoduleproperties__input-container homemoduleproperties__input-container--size">
                        <label className="homemoduleproperties__label">Module Card Layout</label>
                        <Select
                            labelId="module-card-layout-label"
                            id="module-card-layout"
                            className="homemoduleproperties__dropdown homemoduleproperties__dropdown--size"
                            value={moduleCardLayout.value}
                            onChange={this.selectModuleCardLayout}
                            IconComponent={ () => <DropDownIcon/> }>

                            {moduleCardLayouts.map(({id, value, name}) => {
                                return <MenuItem key={id} value={value}>{name}</MenuItem>
                            })};
                        </Select>
                    </div>
                    <div className="homemoduleproperties__input-container homemoduleproperties__input-container--size">
                        <label className="homemoduleproperties__label">Card Stacking</label>
                        <Select
                            labelId="module-card-layout-label"
                            id="module-card-layout"
                            className="homemoduleproperties__dropdown homemoduleproperties__dropdown--size"
                            value={cardStack.value}
                            onChange={this.selectCardStack}
                            IconComponent={ () => <DropDownIcon/> }>

                            {cardStacks.map(({id, value, name}) => {
                                return <MenuItem key={id} value={value}>{name}</MenuItem>
                            })};
                        </Select>
                    </div>
                </form>
            </section>
        )
    }
}