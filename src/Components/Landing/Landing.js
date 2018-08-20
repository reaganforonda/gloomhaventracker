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
                    Landing Main Content
                </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Landing);