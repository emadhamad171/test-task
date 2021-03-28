import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';

const Routes = () => {
    return (
            <Route exact path="/" component={HomePage} />
    );
};

export default Routes;
