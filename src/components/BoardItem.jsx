import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from './Button';

function BoardItem({ item }) {
  const { listOfGames } = useContext(applicationContext);
  console.log(listOfGames);
  return (
    <>
      <table>
        <tr>
          <td>{item.homeTeam}</td>
          <td>{item.scoreHomeTeam} : </td>
          <td>{item.scoreAwayTeam}</td>
          <td>{item.awayTeam}</td>
        </tr>
      </table>

      <Button>+</Button>
    </>
  );
}

export default BoardItem;
