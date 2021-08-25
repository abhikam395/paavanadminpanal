import React, {Component} from 'react';
import SidebarComponent from '../components/sidebar/SidebarComponent';
import HomeRouter from '../routers/homeRouter';
import './home.scss';

export default class HomeScreen extends Component{
    render(){
        return (
            <main className="home home--size home--theme">
                <SidebarComponent />
                <div className="home__container home__container--size">
                    <HomeRouter />
                </div>
            </main>
        )
    }
}