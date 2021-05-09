import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import CharsList from "./components/CharsList";
import CharDetails from "./components/CharDetails";


export default function RouterApp () {
    return (
    <div className="Menu">
      <Router>
        <Switch>
          <Route path='/characters/:id' component={CharDetails}/>
          <Route path='/characters' component={CharsList}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
    )
}