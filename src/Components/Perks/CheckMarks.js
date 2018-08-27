import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


export class CheckMarks extends React.Component {

    constructor(props){
        super(props);

        this.state={
            check1:'',
            check2:'',
            check3: '',
            check4: '',
            check5: '',
            check6: '',
            check7: '',
            check8: '',
            check9: '',
            check10: '',
            check11: '',
            check12: '',
            check13: '',
            check14: '',
            check15: '',
            check16: '',
            check17: '',
            check18: ''
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
                        <input name='check1' type='checkbox'/>
                        <input name='check2' type='checkbox'/>
                        <input name='check3' type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input name='check4' type='checkbox'/>
                        <input name='check5' type='checkbox'/>
                        <input name='check6' type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input name='check7' type='checkbox'/>
                        <input name='check8' type='checkbox'/>
                        <input name='check9' type='checkbox'/>
                    </div>
                </div>
                <div className='checkmark-row'>
                    <div className='checkmark-box'>
                        <input name='check10' type='checkbox'/>
                        <input name='check11' type='checkbox'/>
                        <input name='check12' type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input name='check13' type='checkbox'/>
                        <input name='check14' type='checkbox'/>
                        <input name='check15' type='checkbox'/>
                    </div>
                    <div className='checkmark-box'>
                        <input name='check16' type='checkbox'/>
                        <input name='check17' type='checkbox'/>
                        <input name='check18' type='checkbox'/>
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