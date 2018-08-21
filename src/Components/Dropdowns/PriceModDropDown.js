import React from 'react';

export default function PriceModDropDown(props)   {
    let numbers = []

    for(var i =-5; i <= 5; i ++) {
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