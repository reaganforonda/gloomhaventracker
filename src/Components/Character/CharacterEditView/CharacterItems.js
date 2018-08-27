import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class CharacterItems extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className='character-items-container'>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        character: state.characterReducer.character
    }
}

export default connect(mapStateToProps, {})(withRouter(CharacterItems));