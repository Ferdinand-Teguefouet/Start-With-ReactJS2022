import React from "react";
import Body from "components/layout/Body/Body";
import { useParams } from "react-router-dom";

// Styles

// Redux
import { useSelector } from "react-redux";
function Contact() {
  const counterValue = useSelector((state) => state.counter.value);
  // Id contact
  let { id } = useParams();

  return (
    <Body title="CONTACT SCREEN">
      <h3>Contact : Value : {counterValue}</h3>
      <h6>Contact : id : {id}</h6>
    </Body>
  );
}

export default Contact;
