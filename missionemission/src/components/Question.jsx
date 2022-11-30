import React from "react";
import { useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";

function Question({chooseMessage}, {question}) {
    /*const question = props.question;*/
  return (
    <MDBContainer className="d-flex justify-content-center">
        <div className="mx-0 mx-sm-auto">
            <form className="bg-white mt-3" action="">
                <p className="text-start">{question}</p>
                <div className="fst-italic text-center">
                <div className="d-inline mx-3">Disagree</div>
                
                    <MDBRadio
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        label="1"
                        inline
                        onClick={() => chooseMessage(1)}
                    />
                    <MDBRadio
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        label="2"
                        inline
                        onClick={() => chooseMessage(2)}
                    />
                    <MDBRadio
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        label="3"
                        inline
                        onClick={() => chooseMessage(3)}
                    />
                    <MDBRadio
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        label="4"
                        inline
                        onClick={() => chooseMessage(4)}
                    />
                    <MDBRadio
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                        label="5"
                        inline
                        onClick={() => chooseMessage(5)}
                    />
                <div className="d-inline mx-3">Agree</div>
                </div>
            </form>
        </div>
    </MDBContainer>
  );
}
export default Question;