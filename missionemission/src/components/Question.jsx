import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";

function Question(props) {
    const question = props.question;
  return (
    <MDBContainer className="d-flex justify-content-center">
        <div className="mx-0 mx-sm-auto">
            <form className="bg-white mt-3" action="">
                <p className="fw-bold text-center">{question}</p>

                <div className="text-center">
                <div className="d-inline mx-3">Bad</div>
                <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    label="1"
                    inline
                    defaultChecked
                />
                <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    label="2"
                    inline
                    defaultChecked
                />
                <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    label="3"
                    inline
                    defaultChecked
                />
                <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    label="4"
                    inline
                    defaultChecked
                />
                <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    label="5"
                    inline
                    defaultChecked
                />
                <div className="d-inline mx-3">Excellent</div>
                </div>
            </form>
        </div>
    </MDBContainer>
  );
}
export default Question;