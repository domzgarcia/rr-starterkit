import React from 'react';
import 'styles/sideNavigation.scss';

class SideNavigation extends React.Component {

	handleCollapse(){
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
		return(
		<div className="sideNavigation -active">
            	<p><small>Side Navigation</small></p>
				<button onClick={this.handleCollapse.bind(this)}>burger</button>
		</div>)
	}
}

export default SideNavigation;