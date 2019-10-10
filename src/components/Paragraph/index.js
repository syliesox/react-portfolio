import React from "react";

function Paragraph(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`} {...props}>
      <p>{props}</p>
    </div>;
  )
}

export default Paragraph;