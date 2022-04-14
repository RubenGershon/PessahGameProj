import { Alert } from "bootstrap";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { displayLoginError } from "../lib/utils";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./welcomePage.css";
import AuthModal from "../components/AuthModal";

function WelcomePage({ closeModal }) {
  const { onLogin } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    onLogin();
    console.log("LoggedIn");
    navigate("/home");
    closeModal();
  }
  return (
    <div id="welcome-page">
      <div id="left-side">
        <img src={require("../images/retro-gaming.jpg")} />
      </div>
      <div id="right-side">
        <Form id="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </Form.Group>
          {err && <Alert variant="danger">{displayLoginError(err)}</Alert>}
          <Button variant="outline-primary" type="button" onClick={handleLogin}>
            Login with email & password
          </Button>
          - or-
          <Button
            variant="outline-primary"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Create a new account
          </Button>
        </Form>
        <AuthModal show={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default WelcomePage;
