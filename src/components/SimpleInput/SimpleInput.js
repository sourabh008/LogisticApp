import React from "react";
import "./input.css";

function SimpleInput(props) {
  const readOnly1 = props.readOnly;
  return (
    <div className="input1">
      <lable>{props.lable}</lable>
      {!readOnly1 ? (
        <input
          id="formControl"
          style={{ width: props.width }}
          type="text"
          readOnly
        />
      ) : (
        <input id="formControl" style={{ width: props.width }} type="text" />
      )}
    </div>
  );
}

export default SimpleInput;
