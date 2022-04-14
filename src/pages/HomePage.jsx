import React from "react";
import { Alert } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Alert variant="info">
        Hi Anakin Skywalker, the last time you played you received a score of
        1610305 and your higher score is 101513213!!
      </Alert>
      <Alert variant="info">
        You can press the button (no button yet) to start a new game and you
        will be redirected to the /games page!
      </Alert>
    </>
  );
}

export default HomePage;
