import React from 'react';
import {withRouter} from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import HeaderButton from './HeaderButton';

export class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <header className='header'>
                <HamburgerMenu/>
                <div className='header-title'>
                    <h1>{this.props.headerTitle }</h1>
                </div>
                <HeaderButton/>
            </header>
        )
    }
}

export default withRouter(Header);