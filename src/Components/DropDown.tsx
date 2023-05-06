import { Text } from "@mantine/core";
import React, { useState } from "react";
import "./DropDown.css";

interface Props {
  text: string;
  title: string;
}
const DropDown: React.FC<Props> = ({ text, title }) => {
  const [click, setClick] = useState<Boolean>(false);

  return (
    <>
      <div onClick={() => setClick(!click)}>
        <h1>{title}</h1>
        <div className={`drop-down-grid-wrapper${click ? "-active" : ""}`}>
          <div className="drop-down-grid-inner">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
