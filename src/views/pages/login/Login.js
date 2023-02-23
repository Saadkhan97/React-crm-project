/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"
import Image from '../../../assets/images/burhani-web-logo.png'
import Image2 from '../../../assets/images/Landing image.png'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center background">
    <MDBContainer className="my-5 ">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={Image2} alt="login form" className='rounded-start w-100 h-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column w-100'>

              <div className='d-flex flex-row w-100 justify-content-center'>
                <img src={Image} alt="Logo"/>
              </div>

              <h5 className=" d-flex  justify-content-center fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="d-flex mb-4 px-5 btn-login justify-content-center " color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/register">
              <a href={Link} style={{color: '#393f81'}}>Register here</a>
              </Link></p>
              

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default App;