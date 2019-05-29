import React from 'react';
import {Route,Switch} from 'react-router';
import TopNavigation from 'partials/TopNavigation/TopNavigation';
import SideNavigation from 'partials/SideNavigation/SideNavigation';
import DefaultScene from 'scenes/DefaultScene';

// Non-recursive route.
const routes = (
    <div id="main-wrapper" className="for-collapse-wrapper -active">
        <TopNavigation />
        <SideNavigation />
    
        <Switch>
            <Route path={'/'} component={DefaultScene} />
        </Switch>
    </div>
)

export default routes