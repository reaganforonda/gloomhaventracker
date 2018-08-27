import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ExperienceDropDown from '../../Dropdowns/ExperienceDropDown';
import {loadSelectedCharacter} from '../../../ducks/characterReducer';
import axios from 'axios';
import LoadingSpinner from '../../Loading/LoadingSpinner';

export class CharacterDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            characterID: '',
            characterName: '',
            level: '',
            characterClass: '',
            exp: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleExpSelect = this.handleExpSelect.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        if(props.character) {
            return {
                characterID: props.character.character_id,  
                characterName: props.character.character_name,
                level: props.character.level,
                characterClass: props.character.characterClass,
                exp: props.character.experience
            }
        }
    }


    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    };

    handleExpSelect(e) {
        this.setState({level: e.target.value})
    }

    handleSaveSubmit(e) {
        e.preventDefault();

        let updatedCharData = {
            characterName : this.state.characterName,
            level: this.state.level,
            exp: this.state.exp
        }

        console.log(updatedCharData);

        // axios.put(`/api/character/${this.props.character.character_id}`, updatedCharData).then((result) => {
        //     this.props.loadSelectedCharacter(this.props.character.character_id);
        // }).catch((err) => {
        //     console.log(err); //TODO:
        // })
    }

    render(){
        return (
            <div className='character-details-container'>
                {
                    !this.props.character ? <LoadingSpinner/> : (
                        <main className='character-details-main'>
                    <div className='character-details-main-row'>
                        <p>Name</p> <input value={this.state.characterName} name='characterName' type='text' 
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Class</p>
                        <input value={this.state.characterClass} name='characterClass' type='text' disabled/>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Level</p>
                        <ExperienceDropDown handleExpSelect={this.handleExpSelect} exp={this.state.exp}/>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Experience</p>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Gold</p>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Notes</p>
                    </div>
                    <div className='character-details-main-row'>
                        <button onClick={(e)=>this.handleSaveSubmit(e)}>Save</button>
                    </div>
                </main>
                    )
                }
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

export default connect(mapStateToProps, {loadSelectedCharacter})(withRouter(CharacterDetails));