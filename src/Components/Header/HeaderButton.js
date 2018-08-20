import React from 'react';

export default function HeaderButtton(props){
    return (
        <div className='header-btn'>
            <button>{props.btn}</button>
        </div>
    )
}