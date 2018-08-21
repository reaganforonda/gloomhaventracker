import React from 'react';

export default function RepudationDropDown(props)   {
    let numbers = []

    for(var i =-20; i <= 20; i ++) {
        numbers.push(i);
    }

    let options = numbers.map((values, index)=> {
        return <option value={values} key={values + index}>{values}</option>
    });

    return (
        <select onChange={(e)=>props.handleSelect(e)}>
            {options}
        </select>
    )
}