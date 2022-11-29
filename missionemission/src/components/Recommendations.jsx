import React from "react";
import Header from "./Header";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import './styles.css';

class Recommendations extends React.Component {
  render() {
    return (
      <div className="Recommendations">
        <Header name="Personalized Recommendations"/>;
        <div className="list">
          <MDBContainer className="">
            <MDBRow>
              <MDBCol md="6">
                 Tips
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">1.</li>
                  <li class="list-group-item">2.</li>
                  <li class="list-group-item">3.</li>
                  <li class="list-group-item">4.</li>
                  <li class="list-group-item">5.</li>
                </ul>
              </MDBCol>
              <MDBCol md="6">
                Articles
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">1.</li>
                  <li class="list-group-item">2.</li>
                  <li class="list-group-item">3.</li>
                  <li class="list-group-item">4.</li>
                  <li class="list-group-item">5.</li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              
            </MDBRow>
          </MDBContainer>
            
        </div>
      </div>
    );
    
  }
}

export default Recommendations;