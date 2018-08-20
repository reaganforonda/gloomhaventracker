import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

export class Register extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let user = {
            userName : this.state.userName,
            email : this.state.email,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword,
            displayPasswordError: false
        }

        const validForm = this.validateForm();
        
        if(validForm) {
            axios.post('/api/auth/register', user).then((result) => {
                this.resetForm();
                this.props.history.push('/dashboard');
            }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log("Not Valid");
        }
    }

    validateForm(){
        let samePassword = this.state.password === this.state.confirmPassword;
        if(!samePassword){
            this.setState({
                displayPasswordError: true
            })
            return false;
        } else {
            return true;
        }
    }

    resetForm(){
        this.setState({
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render(){
        return (
            <div className='register-container'>
                <form className='register-form'>
                    <div className='register-form-row'>
                        <input type='text' name='userName' placeholder='User Name' 
                            value={this.state.userName} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='register-form-row'>
                        <input type='email' name='email' placeholder='Email' 
                            value={this.state.email} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='register-form-row'>
                        <input type='password' name='password' placeholder='Password' 
                            value={this.state.password} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='register-form-row'>
                        <input type='password' name='confirmPassword' placeholder='Confirm Password' 
                            value={this.state.confirmPassword} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='register-form-row'>
                        {
                            this.state.displayPasswordError ? (<div>
                                <p>Password does not match</p>
                            </div>) : null
                        }
                    </div>
                    <div className='register-form-row'>
                        <input onClick={(e)=> this.handleSubmit(e)} type='submit' placeholder='Submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Register);