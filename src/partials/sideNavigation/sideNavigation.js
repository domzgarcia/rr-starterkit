import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './sideNavigation.scss';

import ListNavigation from './types/ListNavigation';

class SideNavigation extends React.Component {

	setClassesToActive(collapse){
		/* Pointing side navigation only */
		return (collapse) ? '-active' : '';
	}

	render(){
		const {isCollapsed} = this.props
		return(
			<div className={"side-navigation " + this.setClassesToActive(isCollapsed)}>
				<Fragment>
					<ListNavigation isCollapsed={isCollapsed} />

					{/* Border fixer 
					{(isCollapsed)
					? */}<div style={{
						borderRight:'1px solid #e4e4e4',
						position: 'absolute',
						bottom: '0',
						left: '0',
						width: '100%',
						height: '100%',
				      }}></div>
					{/* : <span></span>}  */}
				</Fragment>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    isCollapsed: state.appUI.isCollapsed
})

export default connect(
    mapStateToProps, 
    null
)(SideNavigation);