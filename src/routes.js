import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)