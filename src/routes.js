import React from 'react';
import {Route,Switch} from 'react-router';

// Non-recursive route.
const routes = (
    <React.Fragment>
        <Switch>
            <Route path={'/'} component={() => {
            return(
                <div>Hello World</div>
            )}} />
        </Switch>
    </React.Fragment>
)

export default routes