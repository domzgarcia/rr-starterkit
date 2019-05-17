import React from 'react'
import {ConnectedRouter} from 'connected-react-router'
import routes from './setup/routes';
import PropTypes from 'prop-types';

const Setup = ({history}) => {
    return (
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>)
  };

Setup.propTypes = { // resolved `computedMatch`
  history: PropTypes.object,
}

export default Setup;