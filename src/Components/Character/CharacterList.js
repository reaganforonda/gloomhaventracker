import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getAllCharacters} from '../../ducks/characterReducer';
import CharacterListCard from './CharacterListCard';

export class CharacterList extends React.Component{

    componentDidMount(){
        this.props.getAllCharacters(this.props.user.user_id);
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
                    <CharacterListCard characters={this.props.allCharacters}/>
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
        allCharacters : state.characterReducer.allCharacters
    }
}

export default connect(mapStateToProps, {getAllCharacters})(withRouter(CharacterList));
