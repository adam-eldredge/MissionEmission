import React from "react";
import './styles.css';

function Header(props) {
  const name = props.name;
  return (
    <div className="header">
      <h2> {name} </h2>
      <div className="header-text">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.
        </p>
    </div>

    </div>
  )
  ;
}

export default Header;