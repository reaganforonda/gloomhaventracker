import React from 'react';
import {withRouter} from 'react-router-dom';

export class Footer extends React.Component{
    render(){
        return (
            <div className='footer'>
                Footer
            </div>
        )
    }
}

export default withRouter(Footer);