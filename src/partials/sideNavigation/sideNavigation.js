import React, {Fragment} from 'react';
import './sideNavigation.scss';
import ListNavigation from './types/listNavigation';

class SideNavigation extends React.Component {
	
	state = {
		isCollapsed: false,
	}

	handleCollapse = () => {
		this.setState({
			isCollapsed: !this.state.isCollapsed,
		});

		const sideNav = document.querySelector('.sideNavigation');
		const sideNavMainWrapper = document.querySelector('.mainWrapper');
		
		if(sideNav.classList.contains('-active') && 
			sideNavMainWrapper.classList.contains('-active')
		){
			sideNav.classList.remove('-active');
			sideNavMainWrapper.classList.remove('-active');
	
		} else {
			sideNav.classList.add('-active');
			sideNavMainWrapper.classList.add('-active');
		}
	}
	
	render(){	
		const {isCollapsed} = this.state;

		return(
			<div className="sideNavigation -active">
				<div className="btnWrapper">
					<button className="dom-btn -knob" onClick={this.handleCollapse}>
						<i className="icon-reorder"></i>&nbsp;
					</button>
				</div>
				<Fragment>
					<ListNavigation isCollapsed={isCollapsed} />
				</Fragment>
			</div>
		)
	}
}

export default SideNavigation;