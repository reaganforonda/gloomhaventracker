import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import CharacterList from './CharacterList';
import CreateCharacterForm from './CreateCharacterForm';
import CharacterEdit from './CharacterEdit';
import Footer from '../Footer/Footer';

export class CharacterView extends React.Component{
    render(){
        return (
            <div className='charcater-view-container'>
                <Header headerTitle={"Characters"} btn={'Create'}/>
                <main className='character-view-main'>
                    <Switch>
                        <Route exact path='/dashboard/characters' component={CharacterList}/>
                        <Route path='/dashboard/characteres/add' component={CreateCharacterForm}/>
                        <Route path='/dashboard/characters/edit' component={CharacterEdit}/>
                    </Switch>
                </main>
                <Footer/>
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