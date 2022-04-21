import React, { useContext } from "react";
import { Alert, Button, Row, Col, Container } from "react-bootstrap";
import AuthContext from "../contexts/AuthContext";


function HomePage() {
  const {activeUser} = useContext(AuthContext);
  return (
    <>
    <Container>
      <Alert variant="info">
        Hi {activeUser.nickname}, the last time you played you received a score of
        1610305 and your higher score is 101513213!!
      </Alert>
      <Alert variant="info">
        You can press the button (no button yet) to start a new game and you
        will be redirected to the /games page!
      </Alert>
      <Button variant="outline-primary" type="button">
        Start the Game!!!!
      </Button>
  
        <Row className="justify-content-md-center">
      <Col xs lg="5 px-5" ><div className="imgTest header text rps "></div> </Col>
      </Row>
  
      <Row className="justify-content-md-center">
        {/* <div className="testt"> */}
        <Col xs lg="5 px-5"><div className="imgTest header text tetris"></div> </Col>
        {/* </div> */}
        <Col xs lg="5"><div className="imgTest header text snake"></div></Col>
      </Row>
      <Row>
        <Col><div className="imgTest header text pacman"></div></Col>
        <Col><div className="imgTest header text spaceInvaders"></div></Col>
        <Col><div className="imgTest header text mario"></div></Col>
      </Row>
      </Container>
    </>
  );
}

export default HomePage;
