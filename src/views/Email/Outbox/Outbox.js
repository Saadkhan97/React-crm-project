/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

const Outbox = () => {
  const [search, setSearch] = useState("")
  const [content, setContent] = useState([])
  const [filltersearch, setFillterSearch] = useState([])

  const fetchData = () => {
    fetch("http://18.143.65.168:4040/email/emailsWithPagination/0?page=0&size=10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.content)
        setContent(data.content)
        setFillterSearch(data.content)

      })
  }

  const columns =[
    {
      name: "Code",
      selector: (row) => row.code,
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

      <DataTable columns={columns} data={filltersearch} pagination fixedHeader fixedHeaderScrollHeight='400px' highlightOnHover subHeader subHeaderComponent={<input type="text" placeholder='Search here' className="w-25 form-control" value={search} onChange={(e) => setSearch(e.target.value)}/>}/>
    </div>
  )

}

export default Outbox;