import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';

export class CharacterView extends React.Component{
    render(){
        return (
            <div className='charcater-view-container'>
                <Header/>
                <main className='character-view-main'>
                    <Switch>
                        <Route exact path='/dashboard/characters' component={}/>
                        <Route path='/dashboard/characteres/add' component={}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(CharacterView));