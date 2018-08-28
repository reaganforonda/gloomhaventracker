import React from 'react';
import {connect} from 'react-redux';

export class CragheartPerks extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='class-perk-container'>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Remove four +0 cards</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Replace one -1 card with one +1 card</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one -2 card and tow +2 cards</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one +1 IMMOBILIZE card</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add one +2 MUDDLE card</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add two PUSH 2 cards with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add two Earth cards</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Add two Air cards'</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Ignore negative item effects</p>
                </div>
                <div className='class-perk-row'>
                    <input type='checkbox' className='class-perk-checkbox'/>
                    <p>Ignore negative scenario effects</p>
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

export default connect(mapStateToProps, {})(CragheartPerks);