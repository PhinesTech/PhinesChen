import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './app.history';

import Home from './pages/Home/Home';
import FoodLocator from './pages/FoodLocator/foodlocator'
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Dashboard from './pages/Dashboard/dashboard';

import './App.scss';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/foodlocator" component={FoodLocator} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;
