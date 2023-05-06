import React from "react";
import DropDown from "../Components/DropDown";
import "./FirstTerm.css";

const FirstTerm = () => {
  return (
    <>
      <h1 className="first-term-title">First-Term</h1>

      <DropDown text="test" title="What I learnt" />
    </>
  );
};

export default FirstTerm;
