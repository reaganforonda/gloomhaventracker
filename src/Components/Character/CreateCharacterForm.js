import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ClassDropDown from '../Dropdowns/ClassDropdown';
import {getAllClasses} from '../../ducks/dataReducer';

export class CreateCharacterForm extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        console.log(this.props.classes)
        return (
            <div className='create-character-from-container'>
                <form className='create-character-form'>
                    <div className='create-character-form-row'>
                        Name: <input/>
                    </div>
                    <div className='create-character-form-row'>
                        Class: <ClassDropDown classes={this.props.classes}/>
                    </div>
                </form>
                <button>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        achievements: state.dataReducer.achievements,
        classes: state.dataReducer.classes
    }
}

export default connect(mapStateToProps, {getAllClasses})(withRouter(CreateCharacterForm));