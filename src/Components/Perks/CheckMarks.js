import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


export class CheckMarks extends React.Component {

    constructor(props){
        super(props);

        this.state={
            check1:'',
            check2:''
        }

        this.handleCheckSelect = this.handleCheckSelect.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleCheckSelect(e) {
        
    }

    handleSave(e) {
        e.preventDefault();

        let checks={
            check1: this.state.check1,
            check2: this.state.check2
        }

        console.log(checks);
    }

    render(){
        return (
            <div className='checkmark-container'>
                <div className='checkmark-row'>
                    <div className='checkmark-box'>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                    </div>
                </div>
                <div className='checkmark-row'>
                    <div className='checkmark-box'>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                        <input type='checkbox'/>
                    </div>
                </div>
                <button onClick={(e)=>this.handleSave(e)}>Save</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.state
    }
}

export default connect(mapStateToProps, {})(withRouter(CheckMarks));