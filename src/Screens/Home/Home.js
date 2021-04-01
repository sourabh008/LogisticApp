import React, { useState } from "react";
import BalenceHeader from "../BalanceHeader/BalanceHeader";
import OpenInput from "../OpenInput/OpenInput";
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Table1 from "../components/table";
import "./home.css";
function Home() {
  const [openButton, setOpenButton] = useState(false);
  const [editable, setEditable] = useState(false);
  const [id, setId] = useState();

  const getProps = (props) => {
    console.log("vv", props);
    setOpenButton(props.state);
    setId(props.id);
  };
  const editable1=(props)=>{
       setEditable(!editable)
  }
  const headCells = [
    { id: "1", numeric: false, disablePadding: false, label: "ID" },
    { id: "2", numeric: true, disablePadding: false, label: "Contact Name" },
    { id: "3", numeric: true, disablePadding: false, label: "Contact Company" },
    { id: "4", numeric: true, disablePadding: false, label: "Address Lane 1" },
    { id: "5", numeric: true, disablePadding: false, label: "Address Lane 2" },
    { id: "6", numeric: true, disablePadding: false, label: "Address Lane 3" },
    { id: "7", numeric: true, disablePadding: false, label: "City" },
    { id: "8", numeric: true, disablePadding: false, label: "Post Code" },
    {
      id: "9",
      numeric: true,
      disablePadding: false,
      label: "Customer Reference",
    },
    {
      id: "10",
      numeric: true,
      disablePadding: false,
      label: "Tracking Number",
    },
  ];

  return (
    <div className="home">
      <BalenceHeader header="Shipment Order Balance  : 34667" edit={editable} editable={editable1} openButton={openButton}  />
      <hr />
      <div className="search">
        <div className="advance_search">
          <input type="text" />
          <button>Advance Search</button>
        </div>
      </div>
      {/* <hr/> */}
      <div>
        <Table1 getProps={getProps} array={headCells} />
      </div>
      {openButton && (
        <div>
          <OpenInput editable={editable}/>
        </div>
      )}
    </div>
  );
}

export default Home;
