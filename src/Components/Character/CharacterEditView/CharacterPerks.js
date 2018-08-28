import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckMarks from '../../Perks/CheckMarks';
import PerkCard from '../../Perks/PerkCard';

export class CharacterPerks extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            class_id: ''
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.character){
            if(props.character.class_id !== state.class_id) {
                return {
                    class_id: props.character.class_id
                }
            }
        }
        
    }

    render(){

        return (
            <div className='character-perks-container'>
                <CheckMarks/>
                <PerkCard classID={this.state.class_id}/>
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

export default connect(mapStateToProps, {})(withRouter(CharacterPerks));