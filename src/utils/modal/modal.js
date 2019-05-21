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
                <div className="lite-modal-btn-wrapper">
                    <button className="dom-btn lite-modal-exit" onClick={this.handleManagePopup.bind(this)}>&times;</button>                </div>
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
