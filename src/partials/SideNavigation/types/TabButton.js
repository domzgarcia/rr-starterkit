import React from 'react';

const TabButton = (props) => {
    const {name, icon, link} = props.data;
    const {location} = props;

    /* simple route detection */
    const highlight = () => {
        if(location === link){
            return true;
        };
        return false;
    }

    return(
        <div className={"side-navigation-btn " + ((highlight()) ? '-active' : '') }>
            <div className="icon-wrap">
                <i className={icon}></i>
            </div>

            <div className="group">
                <span className="name-lbl">{name}</span>
                <span className="arrow">
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
        </div>
    )
}

export default TabButton;