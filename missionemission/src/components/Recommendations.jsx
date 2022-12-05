import React from "react";
import Header from "./Header";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import './styles.css';
import { Link } from "react-router-dom";

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
                  <h3>Tips</h3>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">1.</li>
                    <li class="list-group-item">2.</li>
                    <li class="list-group-item">3.</li>
                    <li class="list-group-item">4.</li>
                    <li class="list-group-item">5.</li>
                  </ul>
                </MDBCol>
                <MDBCol md="6">
                <h3>Articles</h3>
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
  
          <button onClick={this.handleFoodClick} style={{width: "200px",height: "50px",}} type="submit" class="btn btn-outline-primary btn-lg">
              Food
          </button>
          &emsp;
          <button onClick={this.handleClothingClick} style={{width: "200px",height: "50px",}} type="submit" class="btn btn-outline-primary btn-lg">
              Clothing
          </button>
          &emsp;
          <button onClick={this.handleAppliancesClick} style={{width: "200px",height: "50px",}} type="submit" class="btn btn-outline-primary btn-lg">
              Home
          </button>
          <br/>
          <br/>
          <button onClick={this.handleVehiclesClick} style={{width: "200px",height: "50px",}} type="submit" class="btn btn-outline-primary btn-lg">
              Energy
          </button>
          &emsp;
          <button onClick={this.handlePlasticsClick} style={{width: "200px",height: "50px",}} type="submit" class="btn btn-outline-primary btn-lg">
              Outdoors
          </button>
          &emsp;
          <button onClick={this.handleMiscClick} style={{width: "200px",height: "50px",}} type="submit" class="btn btn-outline-primary btn-lg">
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
          <div className="list">
            <MDBContainer className="">
                <MDBCol md="10">
                <h3>Articles</h3>
                  <ul class="list-group list-group-flush">
                    <a target="_blank" href="https://www.naturefresh.ca/green-kitchen-tips/" class="list-group-item">
                      Tips to make your kitchen greener</a>
                    <a target="_blank" href="https://www.naturefresh.ca/5-eco-friendly-eating-habits-to-adopt-today/" class="list-group-item">
                      Eco-friendly eating habits</a>
                    <a target="_blank" href="https://www.conserve-energy-future.com/35-easy-ways-to-eat-environmentally-friendly.php" class="list-group-item">
                      Ways to eat sustainably</a>
                    <a target="_blank" href="https://www.everydayhealth.com/diet-nutrition/best-worst-diet-plans-environment/" class="list-group-item">
                      How diet affects the environment</a>

                  </ul>
                </MDBCol>
            </MDBContainer>
          </div>
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit" class="btn btn-outline-primary btn-lg">
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
          <div className="list">
            <MDBContainer className="">
                <MDBCol md="10">
                <h3>Articles</h3>
                  <ul class="list-group list-group-flush">
                    <a target="_blank" href="https://www.harpersbazaar.com/uk/fashion/what-to-wear/a41158/how-to-be-sustainable-fashion/" class="list-group-item">
                      Steps for sustainable fashion</a>
                    <a target="_blank" href="https://www.webmd.com/beauty/features/eco-friendly-fashion-habits" class="list-group-item">
                      Eco-Friendly Fashion Habits</a>
                    <a target="_blank" href="https://www.treehugger.com/how-to-go-green-laundry-4858690" class="list-group-item">
                      Ways to make your laundry greener</a>
                  </ul>
                </MDBCol>
            </MDBContainer>
          </div>
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit" class="btn btn-outline-primary btn-lg">
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
          <Header name = "Home Recommendations" />
          <div className="list">
            <MDBContainer className="">
                <MDBCol md="10">
                <h3>Articles</h3>
                  <ul class="list-group list-group-flush">
                    <a target="_blank" href="https://ideal-turf.com/eco-friendly-home-tips/" class="list-group-item">
                      Eco-Friendly Home Tips</a>
                    <a target="_blank" href="https://www.bbcearth.com/news/10-simple-steps-to-a-more-sustainable-bathroom" class="list-group-item">
                      Steps for a more sustainable bathroom</a>
                    <a target="_blank" href="https://greenerideal.com/guides/environmentally-friendly-bedroom/" class="list-group-item">
                      Tips for sustainably enovating a bedroom</a>
                  </ul>
                </MDBCol>
            </MDBContainer>
          </div>
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit" class="btn btn-outline-primary btn-lg">
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
          <Header name = "Energy Consumption Recommendations" />
          <div className="list">
            <MDBContainer className="">
                <MDBCol md="10">
                <h3>Articles</h3>
                  <ul class="list-group list-group-flush">
                    <a target="_blank" href="https://www.energysage.com/energy-efficiency/101/ways-to-save-energy/" class="list-group-item">
                      Ways to save energy</a>
                    <a target="_blank" href="https://afdc.energy.gov/conserve/behavior_techniques.html" class="list-group-item">
                      How to conserve fuel while driving</a>
                    <a target="_blank" href="https://www.energy.gov/energysaver/reducing-electricity-use-and-costs " class="list-group-item">
                      Reducing energy bill cost</a>
                  </ul>
                </MDBCol>
            </MDBContainer>
          </div>
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit" class="btn btn-outline-primary btn-lg">
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
          <Header name = "Outdoors Recommendations" />
          <div className="list">
            <MDBContainer className="">
                <MDBCol md="10">
                <h3>Articles</h3>
                  <ul class="list-group list-group-flush">
                    <a target="_blank" href="https://www.realhomes.com/advice/creating-an-eco-friendly-garden " class="list-group-item">
                      Ways to make an eco-friendly garden</a>
                    <a target="_blank" href="https://tataandhoward.com/10-tips-for-a-low-maintenance-eco-friendly-backyard/" class="list-group-item">
                      Tips for a low maintenance eco-friendly backyard</a>
                    <a target="_blank" href="https://www.wbur.org/news/2022/08/22/easy-ways-to-make-lawn-more-eco-friendly" class="list-group-item">
                      Ways to make a lawn more eco-friendly</a>
                  </ul>
                </MDBCol>
            </MDBContainer>
          </div>
          <div className="returnButton">
          <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit" class="btn btn-outline-primary btn-lg">
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
        <div className="list">
            <MDBContainer className="">
                <MDBCol md="10">
                <h3>Articles</h3>
                  <ul class="list-group list-group-flush">
                    <a target="_blank" href="https://www.theguardian.com/environment/2020/feb/29/50-ways-to-green-up-your-life-save-the-planet#ec1cad0b-7cc0-4904-86b1-8e91afb17bc3" class="list-group-item">
                      Ways to make your life-style greener</a>
                    <a target="_blank" href="https://www.sustainably-chic.com/blog/10-one-stop-shops-for-the-conscious-consumers-eco-ethical-and-sustainable-online-stores" class="list-group-item">
                      Sustainable and Ethical online shopping markets</a>
                     <a target="_blank" href="https://www.foodnetwork.com/how-to/packages/smart-shopping/how-to-sustainable-grocery-shopping" class="list-group-item">
                      Sustainable grocery shopping habbits</a>
                    <a target="_blank" href="https://www.epa.gov/watersense/start-saving" class="list-group-item">
                      Reducing water usage</a>

                  </ul>
                </MDBCol>
            </MDBContainer>
          </div>
        <div className="returnButton">
        <button onClick={this.handleReturnClick} style={{width: "200px",height: "50px", alignSelf: "flex-end"}} type="submit" class="btn btn-outline-primary btn-lg">
            Return
        </button>
        </div>
      </div>
      )
    }
  }

}

export default Recommendations;