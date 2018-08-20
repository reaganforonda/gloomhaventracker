import React from 'react';
import {withRouter, Link} from 'react-router-dom';

export class Footer extends React.Component{
    render(){
        return (
            <footer className='footer'>
                <div className='footer-section'>
                    <Link to='/dashboard'>Home</Link>
                </div>
                <div className='footer-section'>
                    Party
                </div>
                <div className='footer-section'>
                    Characters
                </div>
                <div className='footer-section'>
                    Combat
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer);