import React from "react";

function Heading(props) {
  return (
    <h1 className={props.className} id={props.id}>
      {props.text}
      <span>{props.spanText}</span>
    </h1>
  );
}

export default Heading;
