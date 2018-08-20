import React from 'react';
import {withRouter} from 'react-router-dom';

export class Footer extends React.Component{
    render(){
        return (
            <footer className='footer'>
                Footer
            </footer>
        )
    }
}

export default withRouter(Footer);