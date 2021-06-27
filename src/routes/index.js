import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Views
import Home from "../views/Home";
import Characters from "../views/Characters";
import Locations from "../views/Locations";
import Episodes from "../views/Episodes";

//Components
import Menu from "../components/Menu";

export default function Routes() {
    return (
        <Router>
            <Menu/>
            <Switch>
                <Route path="/characters">
                    <Characters/>
                </Route>
                <Route path="/locations">
                    <Locations/>
                </Route>
                <Route path="/episodes">
                    <Episodes/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}