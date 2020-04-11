import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';

import './App.scss';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </Router>
    );
};

export default App;
