import { Center, Text } from "@mantine/core";
import React, { useState, useRef, useEffect } from "react";
import "./DropDown.css";

interface Props {
  text: string;
  title: string;
}
const DropDown: React.FC<{ text: string; title: string }> = ({
  text,
  title,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Center>
        <div className="drop-down">
          <Center>
            <h1 className="drop-down-title" onClick={() => setClick(!click)}>
              {title}
            </h1>
          </Center>
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
            <p>{text}</p>
          </div>
        </div>
      </Center>
    </>
  );
};

export default DropDown;
