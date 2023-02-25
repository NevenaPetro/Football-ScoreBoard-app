import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from './Button';

function BoardItem({ item }) {
  const {
    gameStarting,
    btnStartGameDisabled
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
            btnId={item.gameId}
            isDisabled={btnStartGameDisabled}
          >
            Start Game
          </Button>
        </td>
        <td>
          <Button btnId={item.gameId} isDisabled={item.btnUpdateDisabled}>
            Update Score
          </Button>
        </td>
        <td>
          <Button btnId={item.gameId} isDisabled={item.btnFinishDisabled}>
            Finish Game
          </Button>
        </td>
      </tr>
    </>
  );
}

export default BoardItem;
