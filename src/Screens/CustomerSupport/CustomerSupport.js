import React ,{useState} from 'react'
import "./customerSupport.css"

import BalenceHeader from "../BalanceHeader/BalanceHeader"
import Table1 from "../components/table"

export default function CustomerSupport() {
    const [openButton,setOpenButton]=useState(false);
    const [id,setId]=useState(false);

    const getProps=(props)=>{
        console.log("fedfefe",props)
        setOpenButton(props.state)
        setId(props.id)
    }
    const headCells = [
        { id: '1', numeric: false, disablePadding: false, label: 'ID' },
        { id: '2', numeric: true, disablePadding: false, label: 'Creation Time' },
        { id: '3', numeric: true, disablePadding: false, label: 'Executed Engins IDs' },
        { id: '4', numeric: true, disablePadding: false, label: 'Description' },
        { id: '5', numeric: true, disablePadding: false, label: 'Balance' },
        { id: '6', numeric: true, disablePadding: false, label: 'Creater User' },
        { id: '7', numeric: true, disablePadding: false, label: 'Transfer Pair' },
        { id: '8', numeric: true, disablePadding: false, label: 'Child Transactions' },
        { id: '9', numeric: true, disablePadding: false, label: 'Parents' },
        { id: '10', numeric: true, disablePadding: false, label: 'Attachments' },
        { id: '11', numeric: false, disablePadding: false, label: 'Company Name' },
        { id: '12', numeric: true, disablePadding: false, label: 'Tenant Id' },
        { id: '13', numeric: true, disablePadding: false, label:  'Supplier Name' },
        { id: '14', numeric: true, disablePadding: false, label: 'Account Number' },
        { id: '15', numeric: true, disablePadding: false, label: 'Tracking Number' },
        { id: '16', numeric: true, disablePadding: false, label: 'Modified By' },
        { id: '17', numeric: true, disablePadding: false, label: 'Last Modified Time' },
        { id: '18', numeric: true, disablePadding: false, label: 'Project Name' },
        { id: '19', numeric: true, disablePadding: false, label: 'Customer Support Type' },
        { id: '20', numeric: true, disablePadding: false, label: 'Refund Invoices' },
        { id: '21', numeric: true, disablePadding: false, label: 'Related Transaction' },
        { id: '22', numeric: true, disablePadding: false, label: 'For Test' },
    
      ];
    return (
        <div>
       <BalenceHeader header="Customer Support Balance" state={openButton} id={id} />
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
