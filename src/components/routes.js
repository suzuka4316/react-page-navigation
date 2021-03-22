import React from 'react';
import { Home, About, Shop, Item } from '../pages';
import { Route, Switch } from 'react-router-dom';

export function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/shop'>
                <Shop />
            </Route>
            <Route path="/shop/:id">
                <Item />
            </Route>
        </Switch>
    )
}
