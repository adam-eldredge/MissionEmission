import React from "react";
import './styles.css';

function Header(props) {
  const name = props.name;
  const text = props.text;
  return (
    <div className="header">
      <h2> {name} </h2>
      <div className="header-text">
        <p> {text} </p>
      </div>
    </div>
  )
  ;
}

export default Header;