import React from 'react';

export default function HeaderButtton(props){
    return (
        <div className='header-btn'>
            <button onClick={props.clickBtn}>{props.btn}</button>
        </div>
    )
}