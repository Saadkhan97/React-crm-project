/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
// import { MDBDataTable } from 'mdbreact';

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

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email Address</th>
        </tr>
      </thead>
      <tbody>
        {emailListList && emailListList.map(emailListList => {
          return (
            <tr>
              <th scope="row" key={emailListList.emailID}>{emailListList.emailID}</th>
              <td key={emailListList.name}>{emailListList.name}</td>
              <td key={emailListList.address}>{emailListList.address}</td>
            </tr>
          );

        })}
      </tbody>
    </table>
  </div>
  )

}

export default Client;