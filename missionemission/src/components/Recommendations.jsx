import React from "react";
import Header from "./Header";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import './styles.css';

class Recommendations extends React.Component {

  constructor(props)
  {
    super(props);
    this.handleAppliancesClick = this.handleAppliancesClick.bind(this);
    this.handleClothingClick = this.handleClothingClick.bind(this);
    this.handleFoodClick = this.handleFoodClick.bind(this);
    this.handleMiscClick = this.handleMiscClick.bind(this);
    this.handlePlasticsClick = this.handlePlasticsClick.bind(this);
    this.handleVehiclesClick = this.handleVehiclesClick.bind(this);
    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.state = {page: 0}
  }

  handleReturnClick() {
    this.setState({page: 0});
  }

  handleFoodClick() {
    this.setState({page: 1});
  }

  handleClothingClick() {
    this.setState({page: 2});
  }

  handleAppliancesClick() {
    this.setState({page: 3});
  }

  handlePlasticsClick() {
    this.setState({page: 4});
  }

  handleVehiclesClick() {
    this.setState({page: 5});
  }

  handleMiscClick() {
    this.setState({page: 6});
  }

  render() {
    const page = this.state.page;

    if (page === 0)
    {
      return (
        <div className="Recommendations">
          <Header name="Personalized Recommendations"/>
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
  
          <div className="recButtons">
  
          <h3>Check Out Some Other Recommendations Here:</h3>
  
          <button onClick={this.handleFoodClick} style={{width: "200px",height: "50px",}} type="submit">
              Food
          </button>
          &emsp;
          <button onClick={this.handleClothingClick} style={{width: "200px",height: "50px",}} type="submit">
              Clothing
          </button>
          &emsp;
          <button onClick={this.handleAppliancesClick} style={{width: "200px",height: "50px",}} type="submit">
              Appliances
          </button>
          <br/>
          <br/>
          <button onClick={this.handleVehiclesClick} style={{width: "200px",height: "50px",}} type="submit">
              Vehicles
          </button>
          &emsp;
          <button onClick={this.handlePlasticsClick} style={{width: "200px",height: "50px",}} type="submit">
              Single-Use Plastic
          </button>
          &emsp;
          <button onClick={this.handleMiscClick} style={{width: "200px",height: "50px",}} type="submit">
              Misc
          </button>
          </div>
  
        </div>
      );
    }
    if (page === 1)
    {
      return (
        <div className="Recommendations">
          <Header name = "Food Recommendations" />
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit">
              Return
          </button>
          </div>
        </div>
      )
    }
    if (page === 2)
    {
      return (
        <div className="Recommendations">
          <Header name = "Clothing Recommendations" />
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit">
              Return
          </button>
          </div>
        </div>
      )
    }
    if (page === 3)
    {
      return (
        <div className="Recommendations">
          <Header name = "Appliance Recommendations" />
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit">
              Return
          </button>
          </div>
        </div>
      )
    }
    if (page === 4)
    {
      return (
        <div className="Recommendations">
          <Header name = "Vehicle Recommendations" />
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit">
              Return
          </button>
          </div>
        </div>
      )
    }
    if (page === 5)
    {
      return (
        <div className="Recommendations">
          <Header name = "Single-Use Plastic Recommendations" />
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit">
              Return
          </button>
          </div>
        </div>
      )
    }
    if (page === 6)
    {
      return (
        <div className="Recommendations">
        <Header name = "Miscellaneous Recommendations" />
        <div className="returnButton">
        <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit">
            Return
        </button>
        </div>
      </div>
      )
    }
  }

}

export default Recommendations;