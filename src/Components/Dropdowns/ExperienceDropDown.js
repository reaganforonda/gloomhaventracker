import React from 'react';

export function ExperienceDropDown(props) {
    let exp = []

    for(var i =1; i <= 9; i ++) {
        exp.push(i);
    }

    let options = exp.map((value, index) => {
        return <option key={valud + index} value={value}>{value}</option>
    })
    return (
        <select onChange={(e) => handleSelect(e)}>
            {options}
        </select>
    )
}