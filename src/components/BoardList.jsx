import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import BoardItem from './BoardItem';
import Button from '../components/Button';

function BoardList() {
  const { listOfGames } = useContext(applicationContext);
  console.log(listOfGames);

  return (
    <div>
      
      <table>
        <tbody>
          {listOfGames &&
            listOfGames.map((e) => <BoardItem item={e}></BoardItem>)}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
