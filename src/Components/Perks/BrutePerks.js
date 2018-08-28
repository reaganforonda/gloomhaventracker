import React from 'react';
import {connect} from 'react-redux';

export class BrutePerks extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='class-perk-container'>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Remove two -1 cards</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Replace one -1 card with one +1 card</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add two +1 cards</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one +3 card</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add three PUSH 1 cards with rolling modifier</p>

                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add two PIERCE 3 cards with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one STUN card with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one DISARM card and one MUDDLE card with rolling modifiers</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one ADD TARGET card with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one Shield 1, Self card</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Ignore negative item effects and add one +1 card</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        character: state.characterReducer.character
    }
}

export default connect(mapStateToProps, {})(BrutePerks);