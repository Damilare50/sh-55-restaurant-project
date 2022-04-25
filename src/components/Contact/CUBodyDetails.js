import React from "react";

function CUBodyDetails(props) {
  const cubdicon = props.cubdicon;
  const cubdheader = props.cubdheader;
  const cubdparagraphone = props.cubdparagraphone;
  const cubdparagraphtwo = props.cubdparagraphtwo;
  return (
    <div className="cubd-details">
      <div className="icon">{cubdicon}</div>
      <div>
        <h1>{cubdheader}</h1>
        <p>{cubdparagraphone}</p>
        <p>{cubdparagraphtwo}</p>
      </div>
    </div>
  );
}

export default CUBodyDetails;
