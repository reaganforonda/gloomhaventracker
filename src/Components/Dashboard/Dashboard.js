import React from 'react';
import {withRouter} from 'react-router-dom';


export class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }
    render(){
        return(
            <div className='dashboard'>
            
            </div>
        )
    }
}

export default withRouter(Dashboard);