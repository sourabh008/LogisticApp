import React from "react";
import "./balance.css";
import Button from "@material-ui/core/Button";

import CalendarViewDaySharpIcon from "@material-ui/icons/CalendarViewDaySharp";
function BalenceHeader(props) {
  return (
    <div className="balance_header">
      <div className="balance_left">
        <CalendarViewDaySharpIcon />
        <h3> {props.header}</h3>
      </div>
      <div className="buttons">
        {props.state && (  
          <>
            <Button variant="contained" color="primary">
          Create
        </Button>
        <Button variant="contained" color="primary">
          Archive
        </Button> <Button variant="contained" color="primary">
          Upload
        </Button>
        </>
        )
        }
        {props.openButton &&
        ( props.edit ? <Button variant="contained" color="primary" onClick={props.editable}>
        save
      </Button>
      :
      <Button variant="contained" color="primary" onClick={props.editable}>
      edit
    </Button>) 
        } 
     <Button variant="contained" color="primary">
          Download
        </Button>
      </div>
    </div>
  );
}

export default BalenceHeader;
