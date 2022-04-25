import React from "react";

function PreHeader(props) {
  const paragraph = props.paragraph;
  return (
    <div className="pre-header">
      <p>{paragraph}</p> <div className="grey line"></div>
    </div>
  );
}

export default PreHeader;
