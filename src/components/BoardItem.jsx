import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from './Button';

function BoardItem({ item }) {
  const {
    gameStarting,
    btnStartGameDisabled,
    btnUpdateScoreDisabled,
    btnFinishGameDisabled,
  } = useContext(applicationContext);

  return (
    <>
      <tr>
        <td>{item.gameId}</td>
        <td>{item.homeTeam}</td>
        <td>{item.scoreHomeTeam} : </td>
        <td>{item.scoreAwayTeam}</td>
        <td>{item.awayTeam}</td>
        <td>
          <Button
            type={'button'}
            handleClick={() => {
              gameStarting(item);
            }}
            id={item.gameId}
            isDisabled={btnStartGameDisabled}
          >
            Start Game
          </Button>
        </td>
        <td>
          <Button id={item.gameId} isDisabled={btnUpdateScoreDisabled}>
            Update Score
          </Button>
        </td>
        <td>
          <Button id={item.gameId} isDisabled={btnFinishGameDisabled}>
            Finish Game
          </Button>
        </td>
      </tr>
    </>
  );
}

export default BoardItem;
