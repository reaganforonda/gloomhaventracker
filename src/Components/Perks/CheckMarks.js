import React from 'react';

export default function CheckMarks(props) {
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
        </div>
    )
}