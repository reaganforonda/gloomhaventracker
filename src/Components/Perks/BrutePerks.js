import React from 'react';
import {connect} from 'react-redux';

export class BrutePerks extends React.Component{
    constructor(props){
        super(props);

        this.state={
            perkCheck1: false,
            perkCheck2: false,
            perkCheck3A: false,
            perkCheck3B: false,
            perkCheck4: false,
            perkCheck5A:false,
            perkCheck5B:false,
            perkCheck6:false,
            perkCheck7A:false,
            perkCheck7B:false,
            perkCheck8:false,
            perkCheck9A:false,
            perkCheck9B:false,
            perkCheck10:false,
            perkCheck11:false
        }
    }

    handleCheck(e) {
        this.setState({[e.target.name]: e.target.checked});
    }


    render(){
        return (
            <div className='class-perk-container'>
                <div className='class-perk-row'>
                    <input name="perkCheck1" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck1} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Remove two -1 cards</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck2" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck2} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Replace one -1 card with one +1 card</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck3A" type='checkbox' className='class-perk-checkbox'checked={this.state.perkCheck3A} onChange={(e)=>this.handleCheck(e)}/>
                    <input name="perkCheck3B" type='checkbox' className='class-perk-checkbox'checked={this.state.perkCheck3B} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add two +1 cards</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck4" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck4} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add one +3 card</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck5A" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck5A} onChange={(e)=>this.handleCheck(e)}/>
                    <input name="perkCheck5B" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck5B} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add three PUSH 1 cards with rolling modifier</p>

                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck6" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck6} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add two PIERCE 3 cards with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck7A" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck7A} onChange={(e)=>this.handleCheck(e)}/>
                    <input name="perkCheck7B" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck7B} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add one STUN card with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck8" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck8} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add one DISARM card and one MUDDLE card with rolling modifiers</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck9A" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck9A} onChange={(e)=>this.handleCheck(e)}/>
                    <input name="perkCheck9B" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck9B} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add one ADD TARGET card with rolling modifier</p>
                </div>
                <div className='class-perk-row'>
                    <input  name="perkCheck10" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck10} onChange={(e)=>this.handleCheck(e)}/>
                    <p>Add one Shield 1, Self card</p>
                </div>
                <div className='class-perk-row'>
                    <input name="perkCheck11" type='checkbox' className='class-perk-checkbox' checked={this.state.perkCheck11} onChange={(e)=>this.handleCheck(e)}/>
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