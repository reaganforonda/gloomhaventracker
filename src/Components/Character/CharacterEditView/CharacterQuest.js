import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


export class CharacterQuest extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='character-quest-container'>
                
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

export default connect(mapStateToProps, {})(withRouter(CharacterQuest));