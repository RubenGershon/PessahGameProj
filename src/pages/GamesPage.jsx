import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Play from "../components/Play";
import Game from "../components/Game";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../scss/app.css"

function GamePage() {
  // const [myChoice, setMyChoice] = useState("");
  // const [score, setScore] = useState(0);

  return (
    <Container>
      {/* <Header score={score} /> */}
      {/* <Routes>
        <Route path="/game" element={<Play setMyChoice={setMyChoice} />} />

        <Route
          path="/play"
          element={
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          }
        />
      </Routes> */}
    </Container>
  );
}

export default GamePage;
