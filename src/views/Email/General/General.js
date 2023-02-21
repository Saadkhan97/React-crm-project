/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
// import { MDBDataTable } from 'mdbreact';

const General = () => {
  const [content, setContent] = useState([])

  const fetchData = () => {
    fetch("http://18.143.65.168:4040/general/emailsWithPagination?page=0&size=10")
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
  return (
    <div>
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Subject</th>
          <th scope="col">Email Address</th>
          <th scope="col">Time Stamp</th>
        </tr>
      </thead>
      <tbody>
        {content && content.map(content => {
          return (
            <tr>
              <th scope="row" key={content.code}>{content.code}</th>
              <td key={content.subject}>{content.subject}</td>
              <td key={content.fromAddress}>{content.fromAddress}</td>
              <td key={content.timestamp}>{content.timestamp}</td>
            </tr>
          );

        })}
      </tbody>
    </table>
  </div>
  )

}

export default General;