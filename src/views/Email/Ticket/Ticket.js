/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
import { MDBDataTable } from 'mdbreact';

const Ticket = () => {
  const [content, setContent] = useState([])

  const fetchData = () => {
    fetch("http://18.143.65.168:4040/ticket/ticketsWithPagination?page=0&size=10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.content)
        setContent(data.content)

      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const data = () => {
    return(
      <div>
        <table>
      <thead>
        <tr>
          <th scope="col">TicketNo</th>
          <th scope="col">Subject</th>
          <th scope="col">Email Address</th>
          <th scope="col">Time Stamp</th>
          <th scope="col">Status</th>
          <th scope="col">Agent</th>
        </tr>
      </thead>
      <tbody>
        {content && content.map(content => {
          return (
            <tr>
              <th scope="row" key={content.ticketNo}>{content.ticketNo}</th>
              <td key={content.subject}>{content.subject}</td>
              <td key={content.fromAddress}>{content.fromAddress}</td>
              <td key={content.timestamp}>{content.timestamp}</td>
              <td key={content.status}>{content.status}</td>
              <td key={content.agent}>{content.agent}</td>
            </tr>
          );

        })}
      </tbody>
    </table>
      </div>
    )
  }
  return (
      <MDBDataTable
      striped
      bordered
      small
      data={data()}
      />

  )

}

export default Ticket;