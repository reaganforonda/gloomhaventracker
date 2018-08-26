import React from 'react';
import {Link} from 'react-router-dom';

export default function CharacterEditHeader(props) {
    return (
        <header className='character-edit-header'>
            <div className='character-edit-header-menu'>
                <Link to='/dashboard/characters/edit'>Details</Link>
                <Link to=''>Perks</Link>
                <Link to=''>Items</Link>
                <Link to=''>Abilities</Link>
                <Link to=''>Quest</Link>
            </div>
        </header>
    )
}