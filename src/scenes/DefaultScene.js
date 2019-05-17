import React from 'react';
import Modal from 'utils/modal/modal';
import {manageModal} from 'actions/modalAction';
import {connect} from 'react-redux';
import Worklog from '../worklog';

class DefaultScene extends React.Component {

	handlePopup(){
		this.props.manageModal();
	}

	render(){	
		return(
		<div className="defaultScene dom-gutter">
			<Modal>
				<Worklog />
			</Modal>
			
			<div>Default Scene</div>

			<button onClick={this.handlePopup.bind(this)}>Open Worklogs</button>
		</div>)
	}
}

const mapDispatchToProps = {
	manageModal,
}

export default connect(
	null, 
	mapDispatchToProps
)(DefaultScene);