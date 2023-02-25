import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from './Button';

function BoardItem({ item }) {
  const { gameStarting, gameFinish, gameUpdate, btnStartGameDisabled } =
    useContext(applicationContext);

  return (
    <>
      <tr>
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
            isDisabled={item.started}
          >
            Start Game
          </Button>
        </td>
        <td>
          <Button
            type={'button'}
            handleClick={() => {
              gameUpdate(item);
            }}
            btnId={item.gameId}
            isDisabled={!item.started}
          >
            Update Score
          </Button>
        </td>
        <td>
          <Button
            type={'button'}
            handleClick={() => {
              gameFinish(item);
            }}
            btnId={item.gameId}
            isDisabled={!item.started}
          >
            Finish Game
          </Button>
        </td>
      </tr>
    </>
  );
}

export default BoardItem;
