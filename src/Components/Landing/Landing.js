import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

export class Landing extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='landing-container'>
                <Header/>
                <main className='landing-main'>
                    <div className='landing-btns'>
                        <button>Register</button>
                        <button>Sign In</button>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Landing);