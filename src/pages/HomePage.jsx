import React, { useContext } from "react";
import { Alert, Button, Row, Col, Container } from "react-bootstrap";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { activeUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Alert variant="info">
          Hi {activeUser.nickname}, the last time you played you received a
          score of 1610305 and your higher score is 101513213!!
        </Alert>
        <Row className="justify-content-md-center">
          <Col xs lg="5 px-5">
            <div
              onClick={() => navigate("/game")}
              className="imgTest header text rps "
            ></div>{" "}
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          {/* <div className="testt"> */}
          <Col xs lg="5 px-5">
            <div className="imgTest header text tetris"></div>{" "}
          </Col>
          {/* </div> */}
          <Col xs lg="5">
            <div className="imgTest header text snake"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="imgTest header text pacman"></div>
          </Col>
          <Col>
            <div className="imgTest header text spaceInvaders"></div>
          </Col>
          <Col>
            <div className="imgTest header text mario"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
