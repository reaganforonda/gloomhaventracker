import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import PartyView from '../PartyView/PartyView';
import { CampaignView } from '../CampaignView/CampaignView';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllParties} from '../../ducks/partyReducer';

export class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }
    
    componentDidMount = async() => {
        await axios.get('/api/auth/me').then((user)=> {
            console.log('Logged In');
            this.props.getAllParties(this.props.user.user_id);
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

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        parties: state.partyReducer.parties
    }
}

export default connect(mapStateToProps, {getAllParties})(withRouter(Dashboard));