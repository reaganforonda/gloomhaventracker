import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class CharacterList extends React.Component{
    render(){
        return (
            <div className='character-list-container'>
                <div className='character-list-table'>
                    <div className='character-list-table-header'>
                        <div className='character-list-table-col'>
                            Name
                        </div>
                        <div className='character-list-table-col'>
                            Class
                        </div>
                        <div className='character-list-table-col'>
                            Level
                        </div>
                        <div className='character-list-table-col'>
                            Retired
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        achievements: state.dataReducer.achievements,
        classes: state.dataReducer.classes
    }
}

export default connect(mapStateToProps, {})(withRouter(CharacterList));
