import React from "react";
import Header from "./Header";
import './styles.css';
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import Profile from "./Profile";
import { useAuth0 } from '@auth0/auth0-react'


function Welcome_screen() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="login_screen">
              <Header name="Welcome" />
              <Profile/>

              <MDBContainer className="">
              <MDBRow>
                
              <MDBCol md="5">
                <div class="card text-white navbar-color mb-3" >
                    <h3 class="card-header">Mission Statment</h3>
                    <div class="card-body">
                      <p class="card-text"> Climate change is an every present rapidily increasing risk to our society.
                        Our mission is to inspire people to take an active role in reducing their carbon footprint. 
                        We hope this we can help people understand the impact of their own habbits and how to help
                        reduce those impacts.</p>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="4">
                <img width="400" height="300" src={require('../assets/welcome_image5.png')} alt="No Planet B"></img>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                 <MDBCol md="1"></MDBCol>
                  <img  width="460" height="250" src={require('../assets/welcome_image3.png')} alt="Advocate for the Earth"></img>
                  <MDBCol md="1"></MDBCol>
                  <img  width="460" height="250" src={require('../assets/welcome_image4.png')} alt="Time for Action"></img>
              </MDBRow>
            </MDBContainer>
                
    </div>
  );
}

export default Welcome_screen;