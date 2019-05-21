import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";

class ListNavigation extends React.Component {

    state = {
        routes: [
            {   name: 'dashboard', 
                icon: 'icon-dashboard', 
                link: '/'
            },
            {   name: 'attendance', 
                icon: 'icon-time', 
                link: '/attendance'
            },
            {   name: 'application summay', 
                icon: 'icon-edit', 
                link: '/application-summary'
            },
        ],
    }

    render(){
        const {routes} = this.state;
        const {location} = this.props;

        const collapse = () => {
            return this.props.isCollapsed;
        }

        return(
            <div className="remove-15px-gutter">
                <ul className={"list-wrap " + ((collapse()) ? '-collapse' : '') }>
                    {routes && routes.map((item, idx) => {
                        return(
                            <li key={idx}>
                                <Link to={item.link}>
                                    <SideNavigationTab 
                                        data={item} 
                                        location={location.pathname} 
                                        isCollapsed={this.props.isCollapsed}
                                    />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const SideNavigationTab = (props) => {
    const {name, icon, link} = props.data;
    const {location} = props;

    const highlight = () => {
        /* simple route detection */
        if(location === link){
            return true;
        };
        return false;
    }

    return(
        <div className={"side-navigation-btn-wrap " + ((highlight()) ? '-active' : '') }>
            <div className="icon-wrapper">
                <i class={(icon) + " icon-6"}></i>
            </div>
            <span className="name-lbl-wrap">{name}</span>
        </div>
    )
}

export default withRouter(ListNavigation);