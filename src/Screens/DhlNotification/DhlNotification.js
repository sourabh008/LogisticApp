import React ,{useState} from 'react'
import "./dhlNotification.css"

import BalenceHeader from "../BalanceHeader/BalanceHeader"
import Table1 from "../components/table"

function DhlNotification() {
    const [openButton,setOpenButton]=useState(false);
    const [id,setId]=useState(false);

    const getProps=(props)=>{
        console.log("fedfefe",props)
        setOpenButton(props.state)
        setId(props.id)
    }
    const headCells = [
        { id: '1', numeric: false, disablePadding: false, label: 'ID' },
        { id: '2', numeric: true, disablePadding: false, label: 'Service' },
        { id: '3', numeric: true, disablePadding: false, label: 'Notify Type' },
        { id: '4', numeric: true, disablePadding: false, label: 'From' },
        { id: '5', numeric: true, disablePadding: false, label: 'To' },
        { id: '6', numeric: true, disablePadding: false, label: 'CC' },
        { id: '7', numeric: true, disablePadding: false, label: 'Date Sent' },
        { id: '8', numeric: true, disablePadding: false, label: 'Date Received' },
        { id: '9', numeric: true, disablePadding: false, label: 'Subject' },
        { id: '10', numeric: true, disablePadding: false, label: 'Body' },
        { id: '11', numeric: false, disablePadding: false, label: 'Html' },
        { id: '12', numeric: true, disablePadding: false, label: 'Thread Id' },
        { id: '13', numeric: true, disablePadding: false, label:  'Assigned Folder' },
        { id: '14', numeric: true, disablePadding: false, label: 'Executed Engine IDs' },
        { id: '15', numeric: true, disablePadding: false, label: 'Description' },
        { id: '16', numeric: true, disablePadding: false, label: 'Tranfer Pair' },
        { id: '17', numeric: true, disablePadding: false, label: 'Child Transactions' },
        { id: '18', numeric: true, disablePadding: false, label: 'Parent' },
        { id: '19', numeric: true, disablePadding: false, label: 'Atachments' },
    
      ];
    return (
        <div className="header1">
       <BalenceHeader header="DHL Notifications " state={openButton} id={id} />
       <hr/>
       <div className="search">
                <div className="advance_search">
                    <input type="text"/>
                    <button>Advance Search</button>
                </div>
            </div>
       <Table1 getProps={getProps} array={headCells}/>

        </div>
    )
}


export default DhlNotification
