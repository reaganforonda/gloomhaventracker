import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getAllCharacters, loadSelectedCharacter} from '../../ducks/characterReducer';
import CharacterListCard from './CharacterListCard';

export class CharacterList extends React.Component{

    constructor(props) {
        super(props);

        this.handleCharacterClick = this.handleCharacterClick.bind(this);
    }

    componentDidMount(){
        this.props.getAllCharacters(this.props.user.user_id);
    }

    handleCharacterClick(characterID){
        this.props.loadSelectedCharacter(characterID);
        if(this.props.character !== 'Loading') {
            this.props.history.push('/dashboard/characters/edit');
            // console.log('hit'); TODO:
        }
    }

    render(){
        return (
            <div className='character-list-container'>
                <div className='character-list-table'>
                    <div className='character-list-table-header'>
                        <div className='character-list-table-col'>
                            Name
                        </div>
                        <div className='character-list-table-col'>
                            Class
                        </div>
                        <div className='character-list-table-col'>
                            Level
                        </div>
                    </div>
                    <CharacterListCard characterSelect={this.handleCharacterClick} characters={this.props.allCharacters}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        achievements: state.dataReducer.achievements,
        classes: state.dataReducer.classes,
        allCharacters : state.characterReducer.allCharacters,
        character : state.characterReducer.character
    }
}

export default connect(mapStateToProps, {getAllCharacters, loadSelectedCharacter})(withRouter(CharacterList));
