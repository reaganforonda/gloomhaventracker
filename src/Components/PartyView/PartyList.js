import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PartyListCard from './PartyListCard';

export class PartyList extends React.Component{
    render(){
        let parties = [];

        if(this.props.parties){
            parties = this.props.parties.map((party) => {
                return (
                    <PartyListCard key={party.party_id} partyName={party.party_name}
                        partyLocation={party.party_location}/>
                )
            })
        }

        return (
            <div className='party-list-container'>
                <div className='party-list-header'>
                    <div>
                        Name
                    </div>
                    <div>
                        Location
                    </div>
                    <div>
                        Characters
                    </div>
                    <div>
                        Active
                    </div>
                </div>
                {parties}
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

export default connect(mapStateToProps, {})(withRouter(PartyList))