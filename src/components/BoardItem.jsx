import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from './Button';

function BoardItem({ item }) {
  const { listOfGames } = useContext(applicationContext);
  const [btnStartGameDisabled, setBtnStartGameDisabled] = useState(false);
  const [btnUpdateScoreDisabled, setBtnUpdateScoreDisabled] = useState(true);
  const [btnFinishGameDisabled, setBtnFinishGameDisabled] = useState(true);
  console.log(listOfGames);
  return (
    <>
    <tr>
      <p>{item.homeTeam}</p>
      <p>{item.scoreHomeTeam} : </p>
      <p>{item.scoreAwayTeam}</p>
      <p>{item.awayTeam}</p>
      <Button isDisabled={btnStartGameDisabled}>Start Game</Button>
      <Button isDisabled={btnUpdateScoreDisabled}>Update Score</Button>
      <Button isDisabled={btnFinishGameDisabled}>Finish Game</Button>
      </tr>
    </>
  );
}

export default BoardItem;
