/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

function Ticket ({match}) {
  const [content, setContent] = useState([])
  

  const fetchData = () => {
    fetch(`http://18.143.65.168:4040/ticket/ticketsWithPagination?page=0&size=10/${match.params.ticketNo}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        // console.log(data.content)
        console.log(match);
        setContent(data.content)
        

      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <p>{content.ticketNo}</p>
    </div>
  )

}

export default Ticket;