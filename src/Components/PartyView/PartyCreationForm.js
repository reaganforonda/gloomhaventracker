import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import ReputationDropDown from '../Dropdowns/ReputationDropDown';

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
        this.handleReputationSelect = this.handleReputationSelect.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let party = {
            userID: this.props.user.user_id,
            name: this.state.name,
            gold: this.state.gold,
            location: this.state.location,
            reputation : this.state.reputation
        }

        console.log(party); 

        axios.post('/api/party', party).then((result) => {
            this.props.history.push('/dashboard/party')
            this.resetForm();
        }).catch((err) =>{
            console.log(err);
        })
    }

    resetForm(){
        this.setState({
            name: '',
            location: '',
            gold: '',
            reputation: ''
        })
    }

    handleReputationSelect(e) {
        this.setState({reputation: e.target.value})
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
                {/* <div className='player-create-form-row'>
                    Reputation: <input onChange={(e)=>this.handleInputChange(e)} type='number' 
                        value={this.state.Reputation} name='reputation'/>
                </div> */}
                <div className='player-create-form-row'>
                    Reputation: <ReputationDropDown handleSelect={this.handleReputationSelect}/>
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