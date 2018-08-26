import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import CharacterList from './CharacterList';
import CreateCharacterForm from './CreateCharacterForm';
import CharacterEdit from './CharacterEdit';
import Footer from '../Footer/Footer';
import {getAllCharacters} from '../../ducks/characterReducer';

export class CharacterView extends React.Component{

    constructor(props){
        super(props);

        this.state = {}

        this.handleCreateBtnClick = this.handleCreateBtnClick.bind(this);   
    }

    componentDidMount(){
        this.props.getAllCharacters(this.props.user.user_id);
    }

    handleCreateBtnClick(e){
        e.preventDefault();

        this.props.history.push('/dashboard/characters/add');
    }

    render(){
        return (
            <div className='charcater-view-container'>
                <Header clickBtn={this.handleCreateBtnClick} headerTitle={"Characters"} btn={'Create'}/>
                <main className='character-view-main'>
                    <Switch>
                        <Route exact path='/dashboard/characters' component={CharacterList}/>
                        <Route path='/dashboard/characters/add' component={CreateCharacterForm}/>
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
        user: state.userReducer.user,
        allCharacters : state.characterReducer.allCharacters
    }
}

export default connect(mapStateToProps, {getAllCharacters})(withRouter(CharacterView));