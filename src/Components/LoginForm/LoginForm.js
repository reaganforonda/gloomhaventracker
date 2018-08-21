import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setActiveUser} from '../../ducks/userReducer';
import axios from 'axios';

export class LoginForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userName : '',
            password : ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitSignInForm = this.submitSignInForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    };

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    };

    submitSignInForm(e) {
        e.preventDefault();

        let user = {
            userName: this.state.userName,
            password: this.state.password
        };

        axios.post('/api/auth/login', user).then((result) => {
            this.props.setActiveUser(result.data);
            this.props.history.push('/dashboard');
            this.resetForm();
        }).catch((err) => {
            console.log(err);
        })

    };

    resetForm(){
        this.setState({
            userName : '',
            password : ''
        })
    };

    render(){
        return (
            <div className='login-form-modal'>
                <form className='login-form'>
                    <div className='login-form-row'>
                        User Name: <input value={this.state.userName} onChange={(e) => this.handleInputChange(e)} 
                            name='userName' type='text' />
                    </div>
                    <div className='login-form-row'>
                        Password: <input value={this.state.password} onChange={(e) => this.handleInputChange(e)} 
                            name='password' type='password'/>
                    </div>
                    <div className='login-form-row'>
                        <input onClick={(e)=>this.submitSignInForm(e)}type='submit' placeholder='Submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {setActiveUser})(withRouter(LoginForm))