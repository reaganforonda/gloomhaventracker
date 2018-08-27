import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import PartyView from '../PartyView/PartyView';
import CampaignView from '../CampaignView/CampaignView';
import {connect} from 'react-redux';
import {getAllParties} from '../../ducks/partyReducer';
import CharacterView from '../Character/CharacterView';
import axios from 'axios';

export class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount = async ()=> {
        await axios.get('/api/auth/me').then((user) => {

        }).catch((err) => {
            this.props.history.push('/')
        })
    }
    
    render(){
        return(
            <div className='dashboard'>
                <main className='dashboard-main'>
                    <Switch>
                        <Route path='/dashboard/party' component={PartyView}/>
                        <Route exact path='/dashboard' component={CampaignView}/>
                        <Route path='/dashboard/characters' component={CharacterView}/>
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