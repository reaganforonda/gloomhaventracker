import React from 'react';
import {withRouter} from 'react-router-dom';

export class PartyCreationForm extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <form className='player-create-form'>
                <div className='player-create-form-row'>
                </div>
                <div className='player-create-form-row'>
                    Name: <input/>
                </div>
            </form>
        )
    }
}

export default withRouter(PartyCreationForm);