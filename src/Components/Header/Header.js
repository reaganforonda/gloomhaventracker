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
                <div className='header-title'>
                    <h1>{this.props.headerTitle }</h1>
                </div>
                <div className='header-button'>
                    Button
                </div>
            </header>
        )
    }
}

export default withRouter(Header);