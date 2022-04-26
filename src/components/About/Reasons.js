import React from "react";

function Reasons(props) {
  const number = props.number;
  const reasonsHead = props.reasonsHead;
  const reasonsParagraph = props.reasonsParagraph;
  return (
    <div className="wcu-reasons">
      <p className="wcur-number">{number}</p>
      <p className="wcur-head">{reasonsHead}</p>
      <p className="wcur-paragraph">{reasonsParagraph}</p>
    </div>
  );
}

export default Reasons;
