import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center } from "@mantine/core";
import FirstTerm from "./First Term/FirstTerm";
import SecondTerm from "./Second Term/SecondTerm";

function App() {
  return (
    <div className="App">
      <Center>
        <h1>What I Learnt During My Co-op Term</h1>
      </Center>

      <FirstTerm />
      <SecondTerm />

      <Center>
        <h1 style={{ maxWidth: "40rem", textAlign: "left" }}>
          To whoever reads this, thank you for the experience and opportunity
          you have provided me!
        </h1>
      </Center>
    </div>
  );
}

export default App;
