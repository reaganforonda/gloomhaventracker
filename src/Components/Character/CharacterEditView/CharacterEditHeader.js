import React from 'react';
import {Link} from 'react-router-dom';

export default function CharacterEditHeader(props) {
    return (
        <div className='character-edit-header'>
            <div className='character-edit-header-menu'>
                <Link to=''>Add</Link>
                <Link to=''>Add</Link>
            </div>
        </div>
    )
}