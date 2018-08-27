import React from 'react';

export default function LevelDropDown(props) {
    let exp = []

    for(var i =1; i <= 9; i ++) {
        exp.push(i);
    }

    let options = exp.map((value, index) => {
        return <option key={value + index} value={value}>{value}</option>
    })
    return (
        <select onChange={(e) => props.handleExpSelect(e)} defaultValue={props.exp}>
            {options}
        </select>
    )
}