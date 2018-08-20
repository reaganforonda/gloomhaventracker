import React from 'react';
import {withRouter} from 'react-router-dom';

export class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <header className='header'>
                <div className='hamburger-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>Gloomhaven Manager</h1>
            </header>
        )
    }
}

export default withRouter(Header);