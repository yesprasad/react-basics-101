import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items'

const SideNavigation = (props) => {
    return(
        <div>
            <SideNav name='bars'
            showNav = {props.showNav}
            onHideNav={props.onHideNav}
            style ={{
                color: '#000',
                padding:'10px',
                cursor: 'pointer'
            }}>
            <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;