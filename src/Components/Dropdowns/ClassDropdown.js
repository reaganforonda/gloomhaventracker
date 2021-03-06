import React from 'react';


export default function ClassDropDown(props) {

    let options = [];

    if(props.classes){
        options = props.classes.map((values, index) => {
            return <option value={values.class_id} key={values.class_id + index}>{values.class_name}</option>
        })
    }

    return (
        <select onChange={(e)=>props.handleSelect(e)}>
            <option value='' disabled selected>Select</option>
            {options}
        </select>
    )
}