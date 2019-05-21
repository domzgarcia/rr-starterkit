import React from 'react';
import {Route,Switch} from 'react-router';
import TopNavigation from 'partials/topNavigation';
import SideNavigation from 'partials/sideNavigation/sideNavigation';
import DefaultScene from 'scenes/DefaultScene';

// Non-recursive route.
const routes = (
    <div id="mainWrapper" className="mainWrapper -active">
        <TopNavigation />
        <SideNavigation />

        <Switch>
            <Route path={'/'} component={DefaultScene} />
        </Switch>
    </div>
)

export default routes