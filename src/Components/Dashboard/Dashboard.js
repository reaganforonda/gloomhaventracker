import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import PartyView from '../PartyView/PartyView';
import { CampaignView } from '../CampaignView/CampaignView';

export class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
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