import React from 'react';
import './style.css';

class NavContainer extends React.Component {
	render(){	
		return(
		<div className="MainWrap">
            <div className="TopNav"><p className="content">Top Nav</p></div>
            <div className="SideNav"><p className="content">Side Nav</p></div>
            <div className="ContentWrap">
                {this.props.children}
            </div>
		</div>)
	}
}

export default NavContainer;