import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {loadSelectedCharacter} from '../../ducks/characterReducer';

export class CheckMarks extends React.Component {

    constructor(props){
        super(props);

        this.state={
            check1: this.props.character.checkmarks.check1,
            check2: this.props.character.checkmarks.check2,
            check3: this.props.character.checkmarks.check3,
            check4: this.props.character.checkmarks.check4,
            check5: this.props.character.checkmarks.check5,
            check6: this.props.character.checkmarks.check6,
            check7: this.props.character.checkmarks.check7,
            check8: this.props.character.checkmarks.check8,
            check9: this.props.character.checkmarks.check9,
            check10: this.props.character.checkmarks.check10,
            check11: this.props.character.checkmarks.check11,
            check12: this.props.character.checkmarks.check12,
            check13: this.props.character.checkmarks.check13,
            check14: this.props.character.checkmarks.check14,
            check15: this.props.character.checkmarks.check15,
            check16: this.props.character.checkmarks.check16,
            check17: this.props.character.checkmarks.check17,
            check18: this.props.character.checkmarks.check18
        }

        this.handleCheckSelect = this.handleCheckSelect.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    

    handleCheckSelect(e) {
        this.setState({[e.target.name] : e.target.checked})
    }

    handleSave(e) {
        e.preventDefault();

        let checks={
            check1: this.state.check1,
            check2: this.state.check2,
            check3: this.state.check3,
            check4: this.state.check4,
            check5: this.state.check5,
            check6: this.state.check6,
            check7: this.state.check7,
            check8: this.state.check8,
            check9: this.state.check9,
            check10: this.state.check10,
            check11: this.state.check11,
            check12: this.state.check12,
            check13: this.state.check13,
            check14: this.state.check14,
            check15: this.state.check15,
            check16: this.state.check16,
            check17: this.state.check17,
            check18: this.state.check18
        }

        let checkmarks = {
            allChecks: checks
        }

        axios.put(`/api/character/goals/${this.props.character.character_id}`, checkmarks).then((result) => {
            this.props.loadSelectedCharacter(this.props.character.character_id);
        }).catch((err) => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className='checkmark-container'>
                <div className='checkmark-row'>
                    <div className='checkmark-box'>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check1' type='checkbox' checked={this.state.check1}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check2' type='checkbox' checked={this.state.check2}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check3' type='checkbox' checked={this.state.check3}/>
                    </div>
                    <div className='checkmark-box'>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check4' type='checkbox' checked={this.state.check4}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check5' type='checkbox' checked={this.state.check5}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check6' type='checkbox' checked={this.state.check6}/>
                    </div>
                    <div className='checkmark-box'>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check7' type='checkbox' checked={this.state.check7}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check8' type='checkbox' checked={this.state.check8}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check9' type='checkbox' checked={this.state.check9}/>
                    </div>
                </div>
                <div className='checkmark-row'>
                    <div className='checkmark-box'>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check10' type='checkbox' checked={this.state.check10}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check11' type='checkbox' checked={this.state.check11}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check12' type='checkbox' checked={this.state.check12}/>
                    </div>
                    <div className='checkmark-box'>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check13' type='checkbox' checked={this.state.check13}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check14' type='checkbox' checked={this.state.check14}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check15' type='checkbox' checked={this.state.check15}/>
                    </div>
                    <div className='checkmark-box'>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check16' type='checkbox' checked={this.state.check16}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check17' type='checkbox' checked={this.state.check17}/>
                        <input onChange={(e)=>this.handleCheckSelect(e)} name='check18' type='checkbox' checked={this.state.check18}/>
                    </div>
                </div>
                <button onClick={(e)=>this.handleSave(e)}>Save</button>
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

export default connect(mapStateToProps, {loadSelectedCharacter})(withRouter(CheckMarks));