import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {withRouter, Switch, Route} from 'react-router-dom';
import PartyCreationForm from './PartyCreationForm';

export class PartyView extends React.Component{
    constructor(props){
        super(props);

        this.state={}

        this.handlePartyBtnClick = this.handlePartyBtnClick.bind(this);
    }

    handlePartyBtnClick(){
        this.props.history.push('/dashboard/party/add')
    }

    render (){
        return (
            <div className='party-view-container'>
                <Header clickBtn={this.handlePartyBtnClick} headerTitle={"Party"} btn={'Create'}/>
                <main className='party-view-main'>
                    <Switch>
                        <Route path='/dashboard/party/add' component={PartyCreationForm}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(PartyView);