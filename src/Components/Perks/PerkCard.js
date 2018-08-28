import React from 'react';
import BrutePerks from './BrutePerks';

export default function PerkCard(props ) {
    let classID  = ~~props.classID;
    let perkCard = ''
    switch(classID) {
        case 1:
            perkCard = <BrutePerks/>
            break;
        case 2:
            classID = 2
            break;
        case 3: 
            classID = 3
            break;
        case 4:
            classID = 4
            break;
        case 5:
            classID = 5
            break;
        case 6:
            classID = 6
            break;
        default:
            break;
    }
    return (
            <div>
                {perkCard}
            </div>
    )
}