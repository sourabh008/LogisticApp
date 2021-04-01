import React from 'react'
import "./selectInput.css"

function SelectInput(props) {
    const readOnly1 = props.readOnly;
    return (
        <div className="input1">

     <label for="cars">{props.lable}</label>
  <select id="cars" name="cars" style={{width:props.width}}>
{ readOnly1 &&  props.options.map(item=>  {
    return(
     <option value={item}>{item}</option>
    )})
}  </select>
        </div>
    )
} 

export default SelectInput
