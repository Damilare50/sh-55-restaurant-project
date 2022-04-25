import React from "react";

function CUInputSection() {
  return (
    <div className="cuis">
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Your Email" />
      <input type="text" className="subject" placeholder="Subject" />
      <textarea
        name=""
        placeholder="Message"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className="cuis-button">
        <button>Send</button>
      </div>
    </div>
  );
}

export default CUInputSection;
