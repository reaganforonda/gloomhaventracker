import React from 'react';
import {withRouter} from 'react-router-dom';

export class PartyCreationForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            location: '',
            reputation: ''
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
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