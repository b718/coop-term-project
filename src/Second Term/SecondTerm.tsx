import React from "react";
import DropDown from "../Components/DropDown";
import "./SecondTerm.css";

const SecondTerm = () => {
  return (
    <>
      <h1 className="second-term-title" style={{ marginTop: "4rem" }}>
        Second-Term
      </h1>

      <DropDown text="test" title="What I learnt" />
    </>
  );
};

export default SecondTerm;
