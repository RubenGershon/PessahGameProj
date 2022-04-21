import React, { useContext, useState } from "react";
import "../scss/header.scss";
import { Button } from "react-bootstrap";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";


const Header = ({ score }) => {
  const [sendScoreButton, setSendScoreButton] = useState(false);
  const [recentScore, setRecentScore] = useState([]);
  // const [scoreGame, setScoreGame] = useState(0)
  const { activeUser } = useContext(AuthContext);
  const sendScore = (score) => {
    let newScore = {
      email: activeUser.user[0].email,
      score: score,
    };
    // activeUser.user[0].nickname}
    console.log(email)
    console.log(activeUser)
    console.log(score)
    axios
      .post("http://localhost:8080/score/add", newScore)
      .then((res) => {
        if (res) {
          setRecentScore(score);
          // getHighScore(activeUser.email);
          alert("Score Sent");
        }
      });
  };

  const handleSendScore = () => {
    sendScore(score);
    setSendScoreButton(false);
  };

  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
        <Button onClick={handleSendScore}> Send Score </Button>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header;
