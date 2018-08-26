import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ClassDropDown from '../Dropdowns/ClassDropdown';
import {getAllClasses} from '../../ducks/dataReducer';
import {getAllCharacters} from '../../ducks/characterReducer';

export class CreateCharacterForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            characterName: '',
            characterClass: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClassSelect = this.handleClassSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.validForm = this.validForm.bind(this);
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
            characterClass : this.state.characterClass
        }

        if(this.validForm()){
            axios.post('/api/character', character).then((result) => {
                this.props.getAllCharacters(this.props.user.user_id);
                this.resetForm();
            }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log("Error") //TODO:
        }
    }

    validForm(){
        if(this.state.characterName && this.state.characterClass) {
            return true;
        }else {
            return false;
        }
    }

    resetForm(){
        this.setState({
            characterName: '',
            characterClass: ''
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
        classes: state.dataReducer.classes,
        allCharacters: state.characterReducer.allCharacters
    }
}

export default connect(mapStateToProps, {getAllClasses, getAllCharacters})(withRouter(CreateCharacterForm));