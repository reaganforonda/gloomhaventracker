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
                <h1>Gloomhaven Tracker</h1>
            </header>
        )
    }
}

export default withRouter(Header);