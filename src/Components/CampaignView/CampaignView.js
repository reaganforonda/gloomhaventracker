import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export class CampaignView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='campaign-view-container'>
                <Header headerTitle={'Campaign'}/>
                    <main className='campaign-view-main'>
                        <div className='campaign-overview'>
                            Campaign Overview View
                        </div>
                    </main>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(CampaignView);