/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

const Client = () => {
  const [emailListList, setEmailListList] = useState([])

  const fetchData = () => {
    fetch("http://18.143.65.168:4040/emailList/getEmailAddressList")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.emailListList)
        setEmailListList(data.emailListList)

      })
  }

  const columns =[
    {
      name: "Email ID",
      selector: (row) => row.emailID,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email Address",
      selector: (row) => row.address,
    },
  ]
  useEffect(() => {
    fetchData()
  }, [])
  return (
    // <div>
    //     <table className="table table-striped table-dark">
    //   <thead>
    //     <tr>
    //       <th scope="col">TicketNo</th>
    //       <th scope="col">Subject</th>
    //       <th scope="col">Email Address</th>
    //       <th scope="col">Time Stamp</th>
    //       <th scope="col">Status</th>
    //       <th scope="col">Agent</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {content && content.map(content => {
    //       return (
    //         <tr>
    //           <th scope="row" key={content.ticketNo}>{content.ticketNo}</th>
    //           <td key={content.subject}>{content.subject}</td>
    //           <td key={content.fromAddress}>{content.fromAddress}</td>
    //           <td key={content.timestamp}>{content.timestamp}</td>
    //           <td key={content.status}>{content.status}</td>
    //           <td key={content.agent}>{content.agent}</td>
    //         </tr>
    //       );
 
    //     })}
    //   </tbody>
    // </table>
    //   </div>
    <DataTable columns={columns} data={emailListList} pagination fixedHeader fixedHeaderScrollHeight='400px'/>
  )

}

export default Client;