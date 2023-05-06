import { Center, Text } from "@mantine/core";
import React, { useState, useRef, useEffect } from "react";
import "./DropDown.css";

interface Props {
  text: string;
  title: string;
}
const DropDown: React.FC<Props> = ({ text, title }) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Center>
        <div className="drop-down" onClick={() => setClick(!click)}>
          <h1 className="drop-down-title">{title}</h1>
          <div
            className="drop-down-content"
            ref={parentRef}
            style={
              click
                ? {
                    height: parentRef.current?.scrollHeight,
                  }
                : {
                    height: "0px",
                  }
            }
          >
            <div>this is amazing!</div>
          </div>
        </div>
      </Center>
    </>
  );
};

export default DropDown;
