import React, { Component } from 'react';
import './homevideos.scss';

export default class HomeVideoScreen extends Component{

    constructor(){
        super();
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.selectFile = this.selectFile.bind(this);
    }

    onButtonClicked(event){
        event.preventDefault();
    }

    selectFile(event){
        event.preventDefault();
        let fileElement = document.getElementById("file-input");
        fileElement.click();
    }

    render(){
        return (
            <section className="homevideos homevideos--size homevideos--theme">
                <h1 className="homevideos__title">Push videos to Database</h1>
                <form className="homevideos__form homevideos__form--size">
                    <button className="homevideos__download-button" onClick={this.onButtonClicked}>Download template</button>
                    <div className="homevideos__row">
                        <button className="homevideos__file-button" onClick={this.selectFile}>Choose File</button>
                        <input id="file-input" type="file" name="name" className="homevideos__file"/>
                        <label className="homevideos__label">No file selected</label>
                    </div>
                    <button className="homevideos__upload-button" onClick={this.onButtonClicked}>Upload</button>
                </form>
            </section>
        )
    }
}