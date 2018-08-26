import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ClassDropDown from '../Dropdowns/ClassDropdown';
import {getAllClasses} from '../../ducks/dataReducer';

export class CreateCharacterForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            characterName: '',
            characterClass: '',
            experience: '',
            level : ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClassSelect = this.handleClassSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    handleClassSelect(e) {
        this.setState({characterClass : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let character={
            userID: this.props.user.user_id,
            characterName: this.state.characterName,
            characterClass : this.state.characterClass,
            experience: this.state.experience,
            level: this.state.level
        }

        console.log(character);
    }

    resetForm(){
        this.setState({

        })
    }

    render(){
        
        return (
            <div className='create-character-from-container'>
                <form className='create-character-form'>
                    <div className='create-character-form-row'>
                        Name: <input name='characterName' type='text' value={this.state.characterName} 
                            onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='create-character-form-row'>
                        Class: <ClassDropDown handleSelect={this.handleClassSelect} classes={this.props.classes}/>
                    </div>
                    <div className='create-character-form-row'>
                        Experience: <input name='experience' type='number' value={this.state.experience} onChange={(e) => this.handleInputChange(e)} />
                    </div>
                    <div className='create-character-form-row'>
                        Level: <input name='level' type='number' value={this.state.level} onChange={(e) =>thsi.handleInputChange(e)} />
                    </div>
                    <div className='create-character-form-row'>
                        
                    </div>

                </form>
                <button onClick={(e)=>this.handleSubmit(e)} >Submit</button>
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