import React from 'react';
import {Router, Route, Redirect} from 'react-router';
import $ from 'jquery';
import SignUp from '../signup/views';
import {createHistory, useBasename} from 'history';
const history=useBasename(createHistory)({
    basename:'/'
});
export default class MasterRouter extends React.Component{
    render(){
        return <Router history={history}>
                    <Route component={SignUp} path="/signup"/>
                </Router>
    }
}