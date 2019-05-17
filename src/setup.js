import React from 'react'
import {ConnectedRouter} from 'connected-react-router'
import routes from './routes';

const Setup = ({history}) => {
    return (
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    )
  };

  export default Setup;