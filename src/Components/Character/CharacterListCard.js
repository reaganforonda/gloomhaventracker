import React from 'react';


export default function CharacterListCard(props) {

    let characterRow = []
    
    if(props.characters) {
        characterRow = props.characters.map((value, index) => {
            return (
                <div onClicker={()=>props.characterSelect()} key={value.character_id + index} className='character-list-card-row'>
                    <div className='character-list-card-col'>
                        {value.character_name}
                    </div>
                    <div className='character-list-card-col'>
                        {value.class_name}
                    </div>
                    <div className='character-list-card-col'>
                        {value.level}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='character-list-card'>
            {characterRow}
        </div>
    )
}