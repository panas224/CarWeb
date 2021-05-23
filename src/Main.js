import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Catalogue from "./Catalogue";
import Contact from "./Contact";
import MyPlans from "./MyPlans";
import SelectGroupedOptionsExample from "./SelectGroupedOptionsExample";


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

            </HashRouter>

        );
    }
}

export default Main;