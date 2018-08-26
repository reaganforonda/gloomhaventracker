import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

export class CreateCharacterForm extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }


    render(){
        return (
            <div className='create-character-from-container'>
                <form className='create-character-form'>
                    <div className='create-character-form-row'>
                        Name: <input/>
                    </div>
                    <div className='create-character-form-row'>
                        Class: <input/>
                    </div>
                </form>
                <button>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(CreateCharacterForm));