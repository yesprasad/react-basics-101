import React from 'react';
import SideNav from 'react-simple-sidenav';
import {Link} from 'react-router-dom';

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
            <div>
                      <Link to='/home'>Home</Link>
                  </div>
                  <div>
                  <Link to='/PointsTable'>Points Table</Link>
                  </div>
            </SideNav>
        </div>
    )
}

export default SideNavigation;