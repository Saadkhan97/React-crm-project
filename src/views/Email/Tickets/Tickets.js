/* eslint-disable prettier/prettier */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const Tickets = () => {
  const [search, setSearch] = useState("")
  const [content, setContent] = useState([])
  const [filltersearch, setFillterSearch] = useState([])

  const fetchData = () => {
    fetch("http://18.143.65.168:4040/ticket/ticketsWithPagination?page=0&size=10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.content)
        setContent(data.content)
        setFillterSearch(data.content)

      })
  }

  const columns = [
    {
      name: "Ticket No",
      selector: (row) => row.ticketNo,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Email Address",
      selector: (row) => row.fromAddress,
    },
    {
      name: "Time Stamp",
      selector: (row) => row.timestamp,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Agent",
      selector: (row) => row.agent
    },
  ]
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const result = content.filter(content => {
      return content.subject.toLowerCase().match(search.toLowerCase());
    })
    setFillterSearch(result)
  }, [search]);
  return (
    <div>
      {content.map((content) => {
        return(
          <div key={content.ticketNo}>
             <Link to={`Ticket/${content.ticketNo}`} style={{ textDecoration: 'none' }}><DataTable title="Tickets" columns={columns} data={filltersearch} pagination fixedHeader fixedHeaderScrollHeight='400px' highlightOnHover subHeader subHeaderComponent={<input type="text" placeholder='Search here' className="w-25 form-control" value={search} onChange={(e) => setSearch(e.target.value)}/>}/></Link>
          </div>
        )
      })}
     
    </div>
  )

}

export default Tickets;