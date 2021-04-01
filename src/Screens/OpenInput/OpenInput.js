import React from "react";
import "./OpenInput.css";

import DateInput1 from "../../components/dateInput/DateInput";

import SimpleInput from "../../components/SimpleInput/SimpleInput";
import SelectInput from "../../components/SelectInput/SelectInput";
function OpenInput(props) {
  return (
    <div>
      <div className="allInput">
        <div className="input_flex">
          <SimpleInput lable="Declared Weight" readOnly={props.editable}/>
          <SelectInput lable="Declared Currency" options={["a", "b", "c"]} readOnly={props.editable} />
          <SelectInput lable="Payment Info" options={["a", "b", "c"]} readOnly={props.editable}/>
          <SelectInput lable="Duty Paid By" options={["a", "b", "c"]} readOnly={props.editable} />
          <SelectInput lable="Dropoff Type" options={["a", "b", "c"]} readOnly={props.editable}/>
          <SelectInput lable="Content" options={["a", "b", "c"]} readOnly={props.editable}/>
          <SelectInput lable="Service Type" options={["a", "b", "c"]} readOnly={props.editable}/>
          <SelectInput
            lable="Shipment Purpose"
            width="230px"
            options={["a", "b", "c"]}
            readOnly={props.editable}/>
        </div>
        <div className="input_flex">
          <SimpleInput lable="EORI" readOnly={props.editable} />
          <SimpleInput lable="VAT Number" readOnly={props.editable} />
          <SelectInput lable="Collection Address " options={["a", "b", "c"]} readOnly={props.editable}/>
          <SimpleInput lable="Description" width="321px" readOnly={props.editable}/>
          <SimpleInput lable="Balance" readOnly={props.editable} />
          <SelectInput lable="Status" options={["a", "b", "c"]} readOnly={props.editable} />
          <SelectInput
            lable="Company Name"
            width="230px"
            options={["a", "b", "c"]}
            readOnly={props.editable} />
        </div>
        <div className="input_flex">
          <SelectInput lable="Supplier Name*" options={["a", "b", "c"]} readOnly={props.editable} />
          <SelectInput lable="Account Number*" options={["a", "b", "c"]} readOnly={props.editable} />
          <SimpleInput lable="Tracing Number" readOnly={props.editable}/>
          <SelectInput
            lable="Project Name*"
            width="155px"
            options={["a", "b", "c"]}
            readOnly={props.editable} />
          <SimpleInput lable="Invoice Number*" width="155px" readOnly={props.editable} />
          <SimpleInput lable="Weight(Kg)" readOnly={props.editable}/>
          <DateInput1 lable="Shipment Date*"  readOnly={props.editable} />
          {/* <SelectInput lable="Invoice Number*"  options={["a","b","c"]} /> */}
        </div>
      </div>
    </div>
  );
}

export default OpenInput;
