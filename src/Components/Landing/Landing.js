import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import {connect} from 'react-redux';
import {getAllAchievs, getAllClasses} from '../../ducks/dataReducer';

export class Landing extends React.Component{
    constructor(props){
        super(props);

        this.state={
            displayLogin: false
        }

        this.handleRegisterButton = this.handleRegisterButton.bind(this);
        this.handleSignInButton = this.handleSignInButton.bind(this);
        this.displayLoginForm = this.displayLoginForm.bind(this);
    }

    handleRegisterButton(e){
        e.preventDefault();

        this.props.history.push('/register');
    }

    handleSignInButton(e) {
        e.preventDefault();

        this.props.history.push('/signin');
    }

    displayLoginForm(e){
        if(this.state.displayLogin) {
            this.setState({displayLogin : false})
        } else {
            this.setState({displayLogin : true})
        }
    }

    componentDidMount(){
        this.props.getAllAchievs();
        this.props.getAllClasses();
    }

    render(){
        return (
            <div className='landing-container'>
                <Header/>
                <main className='landing-main'>
                    <div className='landing-btns'>
                        <button onClick={(e)=>this.handleRegisterButton(e)}>Register</button>
                        <button onClick={(e)=>this.displayLoginForm(e)}>Sign In</button>
                    </div>
                    {
                        !this.state.displayLogin ? null : (<LoginForm/>)
                    }
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        achievements: state.dataReducer.achievements,
        classes: state.dataReducer.classes
    }
}

export default connect(mapStateToProps, {getAllAchievs, getAllClasses})(withRouter(Landing));