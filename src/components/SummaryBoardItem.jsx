import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from './Button';

function SummaryBoardItem({ item }) {

  return (
    <>
      <tr>
        <td>{item.homeTeam}</td>
        <td>{item.scoreHomeTeam} : </td>
        <td>{item.scoreAwayTeam}</td>
        <td>{item.awayTeam}</td>
      </tr>
    </>
  );
}

export default SummaryBoardItem;
