import { React, useState } from "react";
import Header from "./Header";
import './styles.css';

function Survey() {
  const [answers, setAnswers] = useState({
    q1: "1", q2: "1", q3: "1", q4: "1", q5: "1", q6: "1", q7: "1", q8: "1", q9: "1", q10: "1",
    q11: "1", q12: "1", q13: "1", q14: "1", q15: "1", q16: "1", q17: "1", q18: "1", q19: "1", q20: "1",
    q21: "1", q22: "1", q23: "1", q24: "1", q25: "1", q26: "1", q27: "1", q28: "1", q29: "1", q30: "1",
  });

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents the submit button from refreshing the page
    alert(
      "Answers stored"
       /*"Q1: "+answers.q1 +"\n" +"Q2: "+answers.q2 +"\n" +"Q3: "+answers.q3 +"\n" +"Q4: "+answers.q4 +"\n" +"Q5: "+answers.q5 +"\n"
       +"Q6: "+answers.q6 +"\n" +"Q7: "+answers.q7 +"\n" +"Q8: "+answers.q8 +"\n" +"Q9: "+answers.q9 +"\n" +"Q10: "+answers.q10 +"\n"
       +"Q11: "+answers.q11 +"\n" +"Q12: "+answers.q12 +"\n" +"Q13: "+answers.q13 +"\n" +"Q14: "+answers.q14 +"\n" +"Q15: "+answers.q15 +"\n"
       +"Q16: "+answers.q16 +"\n" +"Q17: "+answers.q17 +"\n" +"Q18: "+answers.q18 +"\n" +"Q19: "+answers.q19 +"\n" +"Q20: "+answers.q20 +"\n"
       +"Q21: "+answers.q21 +"\n" +"Q22: "+answers.q22 +"\n" +"Q23: "+answers.q23 +"\n" +"Q24: "+answers.q24 +"\n" +"Q25: "+answers.q25 +"\n"
       +"Q26: "+answers.q26 +"\n" +"Q27: "+answers.q27 +"\n" +"Q28: "+answers.q28 +"\n" +"Q29: "+answers.q29 +"\n" +"Q30: "+answers.q30 +"\n"
       */
      );
    //pull values for database here
  };

  return (
    <div className="survey">
      <Header name="Survey" text="
      Taking this survey will allow us to give you tailored recommendations for greener practices."
      nextline="Please answer on a scale from Strongly Disagree (1) to Strongly Agree (5)."/>
      <div className="question-list">
        <form >
          <div class="form-group">

            <label>1.  &nbsp;</label>
            <select className="survey-select"
              name="q1"
              value={answers.q1}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I make an effort to conserve water.</label>
            <br />

            <label>2.   &nbsp;</label>
            <select className="survey-select"
              name="q2"
              value={answers.q2}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I try to avoid using single-use plastics.</label>
            <br />
            
            <label>3.   &nbsp;</label>
            <select className="survey-select"
              name="q3"
              value={answers.q3}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I often throw away unused food.</label>
            <br />

            <label>4.   &nbsp;</label>
            <select className="survey-select"
              name="q4"
              value={answers.q4}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I repair my appliances, rather than get new ones, whenever possible.</label>
            <br />

            <label>5.   &nbsp;</label>
            <select className="survey-select"
              name="q5"
              value={answers.q5}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I often eat pre-prepared and/or frozen food.</label>
            <br />

            <label>6.   &nbsp;</label>
            <select className="survey-select"
              name="q6"
              value={answers.q6}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I often use bottled water.</label>
            <br />

            <label>7.   &nbsp;</label>
            <select className="survey-select"
              name="q7"
              value={answers.q7}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I buy local ingredients whenever possible.</label>
            <br />

            <label>8.   &nbsp;</label>
            <select className="survey-select"
              name="q8"
              value={answers.q8}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I buy in bulk.</label>
            <br />

            <label>9.   &nbsp;</label>
            <select className="survey-select"
              name="q9"
              value={answers.q9}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I use reusable grocery bags and produce bags at the store.</label>
            <br />

            <label>10.  </label>
            <select className="survey-select"
              name="q10"
              value={answers.q10}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I compost my food waste.</label>
            <br />

            <label>11.  </label>
            <select className="survey-select"
              name="q11"
              value={answers.q11}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>Meat is often a main ingredient in my cooking.</label>
            <br />

            <label>12.  </label>
            <select className="survey-select"
              name="q12"
              value={answers.q12}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>When remodeling I use recycled materials.</label>
            <br />

            <label>13.  </label>
            <select className="survey-select"
              name="q13"
              value={answers.q13}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I monitor for and fix leaky faucets.</label>
            <br />

            <label>14.  </label>
            <select className="survey-select"
              name="q14"
              value={answers.q14}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I borrow, instead of buy, items whenever possible.</label>
            <br />

            <label>15.  </label>
            <select className="survey-select"
              name="q15"
              value={answers.q15}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I grow some of my own food.</label>
            <br />

            <label>16.  </label>
            <select className="survey-select"
              name="q16"
              value={answers.q16}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I maintain a large grass lawn.</label>
            <br />

            <label>17.  </label>
            <select className="survey-select"
              name="q17"
              value={answers.q17}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I allow native plants to grow in my yard.</label>
            <br />

            <label>18.  </label>
            <select className="survey-select"
              name="q18"
              value={answers.q18}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I throw away clothes I do not want.</label>
            <br />

            <label>19.  </label>
            <select className="survey-select"
              name="q19"
              value={answers.q19}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I wash clothing after one wear.</label>
            <br />

            <label>20.  </label>
            <select className="survey-select"
              name="q20"
              value={answers.q20}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I use dryer sheets.</label>
            <br />

            <label>21.  </label>
            <select className="survey-select"
              name="q21"
              value={answers.q21}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I use standard laundry detergent.</label>
            <br />

            <label>22.  </label>
            <select className="survey-select"
              name="q22"
              value={answers.q22}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I mostly buy second hand clothes.</label>
            <br />

            <label>23.  </label>
            <select className="survey-select"
              name="q23"
              value={answers.q23}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I try to take care of my clothes.</label>
            <br />

            <label>24.  </label>
            <select className="survey-select"
              name="q24"
              value={answers.q24}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>When I replace appliances I choose ones that are energy efficient.</label>
            <br />

            <label>25.  </label>
            <select className="survey-select"
              name="q25"
              value={answers.q25}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I cook most meals for one.</label>
            <br />

            <label>26.  </label>
            <select className="survey-select"
              name="q26"
              value={answers.q26}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>When using the stove I use pots that correctly fit the burner.</label>
            <br />

            <label>27.  </label>
            <select className="survey-select"
              name="q27"
              value={answers.q27}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I use LED light bulbs.</label>
            <br />

            <label>28.  </label>
            <select className="survey-select"
              name="q28"
              value={answers.q28}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I have made an effort to weather seal my home as much as possible.</label>
            <br />

            <label>29.  </label>
            <select className="survey-select"
              name="q29"
              value={answers.q29}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I do small loads of laundry.</label>
            <br />

            <label>30.  </label>
            <select className="survey-select"
              name="q30"
              value={answers.q30}
              onChange={handleChange}>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <label>I wash clothing in hot water.</label>
            <br />

          </div>
          <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    );
  }

export default Survey;