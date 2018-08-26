import React from 'react';
import {withRouter, Link} from 'react-router-dom';

export class Footer extends React.Component{
    render(){
        return (
            <footer className='footer'>
                <ul className='footer-menu'>
                    <li className='footer-menu-item'>
                        <Link to='/dashboard'>Home</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link to='/dashboard/party'>Party</Link>
                    </li>
                    <li className='footer-menu-item'>
                        <Link to='/dashboard/characters'>Characters</Link>
                    </li>
                    <li className='footer-menu-item'>
                        Combat
                    </li>
                </ul>
            </footer>
        )
    }
}

export default withRouter(Footer);