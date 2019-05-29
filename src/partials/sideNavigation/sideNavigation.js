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
				
				<div className="o-logo">
					<span className="name-desktop">Helium</span>
					<span className="name-mobile">He</span>
				</div>

				<br />
				<br />
				<br />
				<br />
				
				<Fragment>
					<ListNavigation isCollapsed={isCollapsed} />

					{/* Border fixer 
					{(isCollapsed)
					? */}<div style={{
						borderRight:'1px solid #e4e4e4',
						position: 'absolute',
						top: '59px',
						left: '0',
						width: '100%',
						height: 'calc(100% - 60px)',
				      }}></div>
					{/* : <span></span>}  */}
				</Fragment>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    isCollapsed: state.appUI.isCollapsed
});

export default connect(
    mapStateToProps, 
    null
)(SideNavigation);