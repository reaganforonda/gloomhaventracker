import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

export class PartyCreationForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            location: '',
            gold: '',
            reputation: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let party = {
            userID: 1, //TODO: Need Dynamic
            name: this.state.name,
            gold: this.state.gold,
            location: this.state.location,
            reputation : this.state.reputation
        }

        axios.post('/api/party', party).then((result) => {
            console.log(result);
            this.resetForm();
        }).catch((err) =>{
            console.log(err);
        })
    }

    resetForm(){
        this.setState({
            name: '',
            location: '',
            reputation: ''
        })
    }

    render(){
        return (
            <form className='player-create-form'>
                <div className='player-create-form-row'>
                </div>
                <div className='player-create-form-row'>
                    Name: <input onChange={(e)=>this.handleInputChange(e)} type='text' 
                        value={this.state.name} name='name'/>
                </div>
                <div className='player-create-form-row'>
                    Location: <input onChange={(e)=>this.handleInputChange(e)} type='text' 
                        value={this.state.location} name='location' />
                </div>
                <div className='player-create-form-row'>
                    Reputation: <input onChange={(e)=>this.handleInputChange(e)} type='number' 
                        value={this.state.Reputation} name='reputation'/>
                </div>
                <div className='player-create-form-row'>
                    Gold: <input onChange={(e)=>this.handleInputChange(e)} type='number' 
                        value={this.state.gold} name='gold'/>
                </div>
                <div className='player-create-form-row'>
                    <input onClick={(e) => this.handleSubmit(e)} type='submit' placeholder='Create Party'/>
                </div>                
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(PartyCreationForm));