import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {withRouter} from 'react-router-dom';

export class PartyView extends React.Component{
    render (){
        return (
            <div className='party-view-container'>
                <Header headerTitle={"Party"}/>
                    <main className='party-view-main'>
                        Party View View
                    </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(PartyView);