import React, { Component } from 'react';
import Welcome from './WelcomeComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div>
                {window.location.pathname !== '/welcome' ? (<Header />) : null}
                  <Switch>
                    <Route exact path='/welcome' component={Welcome} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/welcome' />
                  </Switch>
            </div>
        );
    }
}
export default withRouter(Main);