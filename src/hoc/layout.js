import React, { Component } from 'react';
import Header from '../components/Header/header';
import './layout.css';

class Layout extends Component {

    toggleNav = (action) => {
        this.setState({
            showNav: action
        })
    }
    state = {
        showNav: false
    };

    render() {
        return(
            <div>
                <div>
                <Header 
                showNav = {this.state.showNav}
                onHideNav = {() => this.toggleNav(false)}
                onOpenNav = {() => this.toggleNav(true)}
                />
                </div>
                <div>
                {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default Layout;