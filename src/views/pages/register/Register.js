/* eslint-disable prettier/prettier */
import React from 'react'
import './register.css'
import Image from '../../../assets/images/burhani-web-logo.png'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
}
  from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '100vh' }}>
    <MDBContainer fluid>

      

      <MDBCard className='sign-up-card p-5 shadow-5' >
        <MDBCardBody className='p-5 text-center'>
        <div className='d-flex flex-row w-100 justify-content-center'>
            <img src={Image} alt="Logo"/>
        </div>
          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

          <MDBBtn className='w-50 mb-4 btn-sign-up' size='md'>sign up</MDBBtn>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default App;