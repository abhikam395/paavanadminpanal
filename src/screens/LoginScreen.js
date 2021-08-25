import React, {Component} from 'react';
import { MdMessage } from 'react-icons/md';
import {IoKeySharp} from 'react-icons/io5';
import './login.scss';

export default class LoginScreen extends Component{

    constructor(){
        super();
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event){
        event.preventDefault();
    }

    render(){
        return (
            <main className="login login--size">
                <div className="login__content login__content--size login__content--theme">
                    <h1 className="login__title">Login to Paavan Admin Panel</h1>
                    <form className="login__form login__form--size login__form--theme">
                        <div className="login__input-container 
                                login__input-container--size 
                                login__input-container--theme">
                            <MdMessage size={20}/>
                            <input 
                                placeholder="Enter email" 
                                className="login__input login__input--size login__input--theme"
                            />
                        </div>
                        <div className="login__input-container 
                                login__input-container--size 
                                login__input-container--theme">
                            <IoKeySharp size={20}/>
                            <input 
                                placeholder="Enter email" 
                                className="login__input login__input--size login__input--theme"
                            />
                        </div>
                        <button 
                            className="login__button login__button--theme login__button--size"
                            onClick={this.onButtonClick}> Submit
                        </button>
                    </form>
                </div>
            </main>
        )
    }
}