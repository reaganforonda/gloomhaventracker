import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom';
import CharacterEditHeader from './CharacterEditHeader';
import CharacterDetails from './CharacterDetails';
import CharacterPerks from './CharacterPerks';
import CharacterItems from './CharacterItems';
import CharacterAbilities from './CharacterAbilities';

export class CharacterEdit extends React.Component{
    constructor(props) {
        super(props);

        this.state={};
    }

    render(){
        return (
            <div className='character-edit-view-container'>
                <CharacterEditHeader/>
                <main className='character-edit-view-main'>
                    <Switch>
                        <Route exact path='/dashboard/characters/edit' component={CharacterDetails} />
                        <Route path='/dashboard/characters/edit/perks' component={CharacterPerks}/>
                        <Route path='/dashboard/characters/edit/items' component={CharacterItems}/>
                        <Route path='/dashboard/characters/edit/abilities' component={CharacterAbilities}/>
                        <Route path='/dashboard/characters/edit/quest' component={}/>
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

export default connect(mapStateToProps, {})(withRouter(CharacterEdit));

