import React from "react";
import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import './styles.css';

function Survey() {
  const [q1, setQ1] = useState("");
  const handleSubmit = (q1) => {
    alert("submitted " );
    setQ1(q1);
  }
  return (
    <div className="survey">
      <Header name="Survey" text="
      Taking this survey will allow us to give you tailored recommendations for greener practices."/>
      
      <div className="question-list">
        <form onSubmit={handleSubmit}>
          <Question setAnswer={handleSubmit} question="I make an effort to conserve energy around the house." />
          <br />
          <Question question="I make an effort to conserve water." />
          <br />
          <Question question="I try to avoid using single-use plastics." />
          <br />
          <Question question="I do not litter." />
          <br />
          <Question question="I properly recycle plastic, paper, metal, and glass." />
          <br />
          <Question question="I try not to drive more than I need to." />
          <br />
          <Question question="I limit food waste by only buying or making what I need." />
          <br />
          <Question question="I often throw away unused food." />
          <br />
          <Question question="I repair my appliances, rather than get new ones, whenever possible." />
          <br />
          <Question question="I often eat pre-prepared and/or frozen food." />
          <br />
          <Question question="I often use bottled water." />
          <br />
          <Question question="I buy local ingredients whenever possible." />
          <br />
          <Question question="I buy in bulk." />
          <br />
          <Question question="I use reusable grocery bags and produce bags at the store." />
          <br />
          <Question question="I compost my food waste." />
          <br />
          <Question question="Meat is often a main ingredient in my cooking." />
          <br />
          <Question question="When remodeling I use recycled materials." />
          <br />
          <Question question="I monitor for and fix leaky faucets." />
          <br />
          <Question question="I borrow, instead of buy, items whenever possible." />
          <br />
          <Question question="I grow some of my own food." />
          <br />
          <Question question="I maintain a large grass lawn." />
          <br />
          <Question question="I allow native plants to grow in my yard." />
          <br />
          <Question question="I throw away clothes I do not want." />
          <br />
          <Question question="I wash clothing after one wear." />
          <br />
          <Question question="I use dryer sheets." />
          <br />
          <Question question="I use standard laundry detergent." />
          <br />
          <Question question="I mostly buy second hand clothes." />
          <br />
          <Question question="I try to take care of my clothes." />
          <br />
          <Question question="When I replace appliances I choose ones that are energy efficient." />
          <br />
          <Question question="I cook most meals for one." />
          <br />
          <Question question="When using the stove I use pots that correctly fit the burner." />
          <br />
          <Question question="I use LED light bulbs." />
          <br />
          <Question question="I have made an effort to weather seal my home as much as possible." />
          <br />
          <Question question="I do small loads of laundry." />
          <br />
          <Question question="I wash clothing in hot water." />
          <br />

          <div className="submit-btn">
            <input type="submit" value="Submit" />
          </div>

        </form>
        <h1 id="survey_result"> </h1>
      </div>
    </div>
    );
  }

export default Survey;