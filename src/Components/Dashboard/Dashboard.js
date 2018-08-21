import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import PartyView from '../PartyView/PartyView';
import { CampaignView } from '../CampaignView/CampaignView';
import axios from 'axios';

export class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }
    
    componentDidMount = async() => {
        await axios.get('/api/auth/me').then((user)=> {
            console.log('Logged In');
        }).catch((err) => {
            console.log(err); //TODO: 
            this.props.history.push('/')
        })
    }
    render(){
        return(
            <div className='dashboard'>
                <main className='dashboard-main'>
                    <Switch>
                        <Route path='/dashboard/party' component={PartyView}/>
                        <Route path='/dashboard' component={CampaignView}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(Dashboard);