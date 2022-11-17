import React from "react";
import Header from "./Header";
import Question from "./Question";
import './styles.css';

class Survey extends React.Component {
  render() {
    return (
      <div className="survey">
        <Header name="Survey" text="
              Taking this survey will update your progress page 
              and will give you tailored recommendations for greener practices."/>

        <div className="question-list">
          <Question question="I make an effort to conserve energy around the house" />
          <br />
          <Question question="I make an effort to conserve water that I am not using" />
          <br />
          <Question question="I try to avoid using single-use plastics" />
          <br />
          <Question question="I do not litter" />
          <br />
          <Question question="I properly recycle plastic, paper, metal, and glass" />
          <br />
          <Question question="I limit food waste by only buying or making what I need" />
          <br />
          <Question question="I donate used clothes instead of throwing them away" />
          <br />
          <Question question="I try not to drive more than I need to" />
          <br />
          <div className="submit-btn">
            <input type="submit" value="Submit" />
          </div>

        </div>
        
      </div>
    );
  }
}

export default Survey;