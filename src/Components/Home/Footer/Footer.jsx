import { MDBCol, MDBContainer, MDBIcon, MDBModalFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
          <MDBModalFooter className='text-center bg-dark text-white w-100 d-flex justify-content-center' >
            <MDBContainer className='p-4'>
              {/* <section className='mb-4'>
              <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/rolex' role='button'>
                  <MDBIcon fab icon='facebook-f' />
                </a>  
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/rolex' role='button'>
                  <MDBIcon fab icon='twitter' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/rolex/' role='button'>
                  <MDBIcon fab icon='instagram' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/company/rolex' role='button'>
                  <MDBIcon fab icon='linkedin-in' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.youtube.com/rolex' role='button'>
                  <MDBIcon fab icon='youtube' />
                </a> 
                
              </section> */}
      
              <section className=''>
                <form action=''>
                  <div className='row d-flex justify-content-center'>
                    <div className='col-auto'>
                      <p className='pt-2'>
                        <strong>Sign up for our newsletter</strong>
                      </p>
                    </div>
    
                  </div>
                </form>
              </section>
      
              <section className='mb-4'>
                <p>
                DONATE ARTWORKS, BUY ARTWORKS, BECOME THE PART OF KINDNESS
                </p>
              </section>
      
              <section className=''>
                <MDBRow>
                  
                <MDBCol lg='7' md='6' className='mb-4 mb-md-0'>
                   <Link style={{textDecoration: 'none', color: 'white'}} to={'/'}>
                    </Link>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        
                        <a href='/list' className='text-white'>
                          Catalogue
                        </a>
                      </li>
                      <li>
                        <a href='/cart' className='text-white'>
                          Cart
                        </a>
                      </li>
                      <li>
                        <a href='/login' className='text-white'>
                          Log in
                        </a>
                      </li>
                      <li>
                        <a href='/register' className='text-white'>
                          Register
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
      
                  <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
      
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!' className='text-white'>
                          Who we are?
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Abstract Portrait
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Payment
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </section>
              <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  © 2022 Copyright Kyrgyz Heart Foundation
                  <a className='text-white'></a>
            </div>
            </MDBContainer>
           
          </MDBModalFooter>

  );
}