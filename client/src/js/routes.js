import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/home';
import Category from './components/category';
import Product from './components/product';
import SingleCategory from './components/SingleCategory';

const publicPath = '/';

export const routeCodes = {
    HOME: publicPath,
    CATEGORY: `${ publicPath }category`,
    PRODUCT: `${ publicPath }product`
}

export default () => (
    <Switch>
        <Route exact path={ routeCodes.HOME } component={ Home } />
        <Route exact path={ routeCodes.CATEGORY } component={ Category } />
        <Route path={ routeCodes.PRODUCT } component={ Product } />
        <Route path={ routeCodes.CATEGORY+"/:id" } component={ SingleCategory } />
        <Redirect to={ routeCodes.HOME } />
    </Switch>
);