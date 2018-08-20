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
                Header
            </header>
        )
    }
}

export default withRouter(Header);