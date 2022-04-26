import React from "react";
import PreHeader from "../Homepage/PreHeader";
import Reasons from "./Reasons";

function WhyChooseUs() {
  return (
    <div className="why-choose-us ">
      <div className="wcu-header header-post-hero">
        <PreHeader paragraph="Why Us" />

        <h1>Why Choose Our Restaurant</h1>
      </div>
      <div className="wcu-body">
        <Reasons
          number="01"
          reasonsHead="Lorem ipsum "
          reasonsParagraph="Iure, veritatis ullam magni labore, aspernatur aspernatur, exercitationem asperiores molestiae recusandae temporibus"
        />
        <Reasons
          number="02"
          reasonsHead="Dolor sit amet "
          reasonsParagraph="Iure, veritatis ullam magni labore, aspernatur aspernatur, exercitationem asperiores molestiae recusandae temporibus"
        />
        <Reasons
          number="03"
          reasonsHead="Consectetur adipisicing "
          reasonsParagraph="Iure, veritatis ullam magni labore, aspernatur aspernatur, exercitationem asperiores molestiae recusandae temporibus"
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
