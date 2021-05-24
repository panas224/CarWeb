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
import ShowExpandInfo from "./ShowExpandInfo";
import DraggableModalWindow from "./DraggableModalWindow";
import Window from "./Window";


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
                        <li><NavLink to="/info">Overall Info</NavLink></li>
                    </ul>
                    <div className="search-bar">
                        <SelectGroupedOptionsExample/>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/catalogue" component={Catalogue}/>
                        <Route path="/futurePlans" component={MyPlans}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/info" component={ShowExpandInfo}/>
                    </div>
                    <CRUD/>
                </div>
                <Window/>
            </HashRouter>

        );
    }
}

export default Main;