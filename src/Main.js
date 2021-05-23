import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    HashRouter,
    Switch
} from "react-router-dom";
import Home from "./Home";
import Catalogue from "./Catalogue";
import Contact from "./Contact";
import MyPlans from "./MyPlans";
import SelectGroupedOptionsExample from "./SelectGroupedOptionsExample";
import CRUD from "./CRUD";


class Main extends React.Component {
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
                    <div className="search-bar">
                        <SelectGroupedOptionsExample/>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/catalogue" component={Catalogue}/>
                        <Route path="/futurePlans" component={MyPlans}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
                <div className="CRUD">
                    <CRUD/>
                </div>
            </HashRouter>

        );
    }
}

export default Main;