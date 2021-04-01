import React from "react";
import "./dateInput.css";
function DateInput(props) {
  const readOnly1 = props.readOnly;
  return (
    <div id="input_flex1">
      {console.log("lllllll", props)}
      <label>{props.lable}</label>
      {readOnly1 ? (
        <input type="date" id="input2" />
      ) : (
        <input type="date" id="input2" readOnly />
      )}
    </div>
  );
}

export default DateInput;
