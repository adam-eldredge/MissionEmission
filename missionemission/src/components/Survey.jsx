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
          <Question question="1"/>
          <Question question="2"/>
          <Question question="3"/>
          <Question question="4"/>
          <Question question="5"/>
          <Question question="6"/>
          <Question question="7"/>
          <Question question="8"/>

          <div className="submit-btn">
            <input type="submit" value="Submit" />
          </div>

        </div>
        
      </div>
    );
  }
}

export default Survey;