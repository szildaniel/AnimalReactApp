import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Monkey from './Monkey';

const Router = () => (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/monkey" component={Monkey} />
        
            </Switch>
        </BrowserRouter>

    )


    export default Router;