import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }
    render(){
        return(
            <div className='dashboard'>
                <Header/>
                <main className='dashboard-main'>
                    <Switch></Switch>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Dashboard);