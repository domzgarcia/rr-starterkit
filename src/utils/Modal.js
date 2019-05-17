import React from 'react';

class Modal extends React.Component {

    render(){
        return (
            <div className={'modalBg ' + ( (this.props.isShowned) ? '-active' : '' )} 
            onClick={(e)=>{
                if(e.target.className.includes('modalBg')){
                    this.props.autoClose();
                }
            }}>
              <div style={(this.props.config && Object.keys(this.props.config).length) ? this.props.config : {}} 
                className="modalContent">
                <h1>Modal</h1>
              </div>
            </div>
          );      
    }
}

export default Modal;
