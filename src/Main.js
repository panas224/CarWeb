import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Catalogue from "./Catalogue";
import Contact from "./Contact";
import Names from "./Names";
import MyPlans from "./MyPlans";


class Main extends React.Component {
    state = {
        names: [
            'Mercedes-Benz',
            'Audi',
            'BMW'
        ],
        searchTerm: ''
    }
    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/catalogue">Catalogue</NavLink></li>
                        <li><NavLink to="/futurePlans">My Future Plans</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="search">
                        <input type="text" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search for car'/>
                        <div className="searchResult">
                            <Names names={this.dynamicSearch()}/>
                        </div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/catalogue" component={Catalogue}/>
                        <Route path="/futurePlans" component={MyPlans}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;