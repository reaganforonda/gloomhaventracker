import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

export class PartyCreationForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            location: '',
            reputation: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let party = {
            userID: 1, //TODO: Need Dynamic
            name: this.state.name,
            location: this.state.location,
            reputation : this.state.reputation
        }

        axios.post('/api/party', party).then((result) => {
            console.log(result);
        }).catch((err) =>{
            console.log(err);
        })
    }

    render(){
        return (
            <form className='player-create-form'>
                <div className='player-create-form-row'>
                </div>
                <div className='player-create-form-row'>
                    Name: <input type='text' name='name'/>
                </div>
                <div className='player-create-form-row'>
                    Location: <input type='text' name='location' />
                </div>
                <div className='player-create-form-row'>
                    Reputation: <input type='number' name='reputation'/>
                </div>
                <div className='player-create-form-row'>
                    <input type='submit' placeholder='Create Party'/>
                </div>                
            </form>
        )
    }
}

export default withRouter(PartyCreationForm);