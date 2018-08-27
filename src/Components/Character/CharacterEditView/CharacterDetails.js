import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LevelDropDown from '../../Dropdowns/LevelDropDown';
import {loadSelectedCharacter, getAllCharacters} from '../../../ducks/characterReducer';
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
            gold: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleExpSelect = this.handleExpSelect.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
        this.handleAddXP = this.handleAddXP.bind(this);
        this.handleAddGold = this.handleAddGold.bind(this);
        this.handleSubtractGold = this.handleSubtractGold.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        if(props.character) {
            if(props.character.character_id !== state.characterID){
                return {
                    characterID: props.character.character_id,  
                    characterName: props.character.character_name,
                    exp: props.character.experience,
                    level: props.character.level,
                    characterClass: props.character.class_name,
                    gold: props.character.gold
                }
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
            exp: this.state.exp,
            gold: this.state.gold
        }

        axios.put(`/api/character/${this.props.character.character_id}`, updatedCharData).then((result) => {
            this.props.loadSelectedCharacter(this.props.character.character_id);
            this.props.getAllCharacters(this.props.user.user_id)
        }).catch((err) => {
            console.log(err); //TODO:
        })
    }

    handleAddXP(){
        let amnt = ~~(prompt(`Add XP`, 0));
        this.setState({exp: amnt + this.state.exp})
    }

    handleAddGold(){
        let amnt = ~~(prompt('Add Gold', 0));
        this.setState({gold: amnt + this.state.gold});
    }

    handleSubtractGold(){
        let amnt = ~~(prompt('Subtract Gold', 0));
        this.setState({gold: this.state.gold - amnt});
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
                        <LevelDropDown handleExpSelect={this.handleExpSelect} exp={this.state.exp}/>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Experience</p> 
                        <input value={this.state.exp} name='exp' type='number' disabled/>
                        <button onClick={()=>this.handleAddXP()}>+</button>
                    </div>
                    <div className='character-details-main-row'>
                        <p>Gold</p>
                        <input value={this.state.gold} name='gold' type='number' disabled/>
                        <button onClick={()=>this.handleAddGold()}>+</button>
                        <button onClick={()=>this.handleSubtractGold()}>-</button>
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

export default connect(mapStateToProps, {loadSelectedCharacter, getAllCharacters})(withRouter(CharacterDetails));