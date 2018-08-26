import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class CharacterDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className='character-details-container'>
                <main className='character-details-main'>
                
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        character : state.characterReducer.character
    }
}

export default connect(mapStateToProps, {})(withRouter(CharacterDetails));