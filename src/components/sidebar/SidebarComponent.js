import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './sidebar.scss';

const options = [
    {id: 1, name: 'Push Videos', path: '/videos'},
    {id: 2, name: 'Assign Entitiy Scores', path: '/assign-score'},
    {id: 3, name: 'Arrange App Data', path: '/arrange-data'},
    {id: 4, name: 'Log out', path: '/login'},
]

class SidebarComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeOptionId : -1
        }
    }

    onOptionSelected(id, path){
        let {history} = this.props;
        history.push(path);
        this.setState({activeOptionId: id});
    }

    renderOptions(){
        let {activeOptionId} = this.state;
        return options.map(({id, name, path}) => {
            let className = activeOptionId == id ? 
                "sidebar__option sidebar__option--size sidebar__option--theme sidebar__option--active":
                "sidebar__option sidebar__option--size sidebar__option--theme"
            return (
                <li 
                    key={id}
                    className={className}
                    onClick={() => this.onOptionSelected(id, path)}>
                    {name}
                </li>
            )
        })
    }

    render(){
        return (
            <aside className="sidebar sidebar--size sidebar--theme">
                <div className="sidebar__header sidebar__header--size sidebar__header--theme">
                </div>
                <ul className="sidebar__options sidebar__options--size sidebar__options--theme">
                    {this.renderOptions()}
                </ul>
            </aside>
        )
    }
}

export default withRouter(SidebarComponent);