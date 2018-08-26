import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class CharacterDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            characterName: '',
            level: '',
            characterClass: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        if(props.character){
            return {
                characterName : props.character.character_name,
                level: props.character.level,
                characterClass: props.character.class_name
            }
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.tarvet.value})
    };

    render(){
        return (
            <div className='character-details-container'>
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
                        <input disabled value={this.state.level} name='level' type='number'/>
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