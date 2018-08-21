import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class PartyListCard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='party-list-card'>
                <div>{this.props.partyName}</div>
                <div>
                    {this.props.partyLocation}
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        parties: state.partyReducer.parties
    }
}

export default connect(mapStateToProps, {})(withRouter(PartyListCard));