import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

export class Landing extends React.Component{
    constructor(props){
        super(props);

        this.state={}

        this.handleRegisterButton = this.handleRegisterButton.bind(this);
        this.handleSignInButton = this.handleSignInButton.bind(this);
    }

    handleRegisterButton(e){
        e.preventDefault();

        this.props.history.push('/register');
    }

    handleSignInButton(e) {
        e.preventDefault();

        this.props.history.push('/signin');
    }

    render(){
        return (
            <div className='landing-container'>
                <Header/>
                <main className='landing-main'>
                    <div className='landing-btns'>
                        <button onClick={(e)=>this.handleRegisterButton(e)}>Register</button>
                        <button>Sign In</button>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Landing);