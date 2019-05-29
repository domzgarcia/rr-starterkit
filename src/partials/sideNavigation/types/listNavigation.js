import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import TabButton from './TabButton';

class ListNavigation extends React.Component {
    
    state = {
        routes: [
            {   name: 'dashboard', 
                icon: 'fas fa-tachometer-alt', 
                link: '/'
            },
            {   name: 'attendance', 
                icon: 'far fa-clock', 
                link: '/attendance'
            },
            {   name: 'application summay', 
                icon: 'far fa-edit', 
                link: '/application-summary'
            },
            // HR routes
            {   name: '201 Files', 
                icon: 'fas fa-file', 
                link: '/aaa'
            },
            {   name: 'Reports', 
                icon: 'fas fa-cloud-download-alt', 
                link: '/bbb'
            },
            {   name: 'Task Management', 
                icon: 'fas fa-tasks', 
                link: '/ccc'
            },
            {   name: 'HR Announcement', 
                icon: 'fas fa-bullhorn', 
                link: '/ddd'
            },
            {   name: 'Announcement Summary', 
                icon: 'far fa-list-alt', 
                link: '/eee'
            },
            {   name: 'Holidays', 
                icon: 'far fa-file-alt', 
                link: '/fff'
            },
            {   name: 'Upload Leaves', 
                icon: 'fas fa-cloud-upload-alt', 
                link: '/ggg'
            },
            {   name: 'Policy Editor', 
                icon: 'fas fa-rocket', 
                link: '/hhh'
            },
            {   name: 'Schedule Viewer', 
                icon: 'far fa-calendar-alt', 
                link: '/iii'
            }, 
        ],
    }

    render(){
        const {routes} = this.state;
        const {location, isCollapsed} = this.props;

        return(
            // remove-15px-gutter
            <div className="always-on-top">
                <ul className={"side-nav-list " + ((isCollapsed) ? '' : '-collapse') }>
                    {routes && routes.map((item, idx) => {
                        return(
                            <li key={idx}>
                                <Link to={item.link}>
                                    <TabButton 
                                        data={item} 
                                        location={location.pathname} 
                                        isCollapsed={this.props.isCollapsed}
                                    />
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(ListNavigation);