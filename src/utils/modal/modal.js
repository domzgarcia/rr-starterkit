import React from 'react';
import './modal.css';
import {connect} from 'react-redux';
import {manageModal} from 'actions/modalAction';

class Modal extends React.Component {

    handleManagePopup(){
        this.props.manageModal();
    }

    render(){
		return(
        <div className={"lite-modal-bg " + ((this.props.isPopupOpen) ? '-active' : '')}>    
            <div className="lite-modal-content">
                <a href="javascript:void(0);" className="lite-modal-exit" onClick={this.handleManagePopup.bind(this)}>&times;</a>
                {this.props.children}
            </div>
        </div>)
	}
}

const mapStateToProps = (state) => ({
    isPopupOpen: state.modalUI.isPopupOpen
})

const mapDispatchToProps = {
    manageModal,
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Modal);
