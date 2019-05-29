import React from 'react';
import './topNavigation.scss';
import {connect} from 'react-redux';
import {manageSideNavCollapse} from 'actions/appUIAction';

class TopNavigation extends React.Component {

	handleCollapse = () => {
		this.props.manageSideNavCollapse();
		/* Hack to go to parent Tag */
		const forCollapse = document.querySelector('.for-collapse-wrapper');
		
		if( forCollapse.classList.contains('-active') ){
			forCollapse.classList.remove('-active');
		} else {
			forCollapse.classList.add('-active');
		}
	}

	render(){	
		return(
		<div className="top-navigation">
			<div className="btn-wrap">
				{/* Button Like */}
				<div className="dom-btn -knob" 
					onClick={this.handleCollapse}>
					<i className="fas fa-bars"></i>&nbsp;
				</div>
			</div>
        	<small>Top Navigation</small>
		</div>)
	}
}

const mapDispatchToProps = {
    manageSideNavCollapse: manageSideNavCollapse,
}

export default connect(
    null, 
    mapDispatchToProps,
)(TopNavigation);