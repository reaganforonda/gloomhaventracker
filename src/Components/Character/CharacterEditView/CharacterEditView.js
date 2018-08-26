import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


export class CharacterEdit extends React.Component{
    constructor(props) {
        super(props);

        this.state={};
    }

    render(){
        return (
            <div className='character-edit-view-container'>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(CharacterEdit));

