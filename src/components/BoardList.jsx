import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import BoardItem from './BoardItem';


function BoardList() {
  const { listOfGames } = useContext(applicationContext);

  return (
    <div>
      
      <table>
        <tbody>
          {listOfGames &&
            listOfGames.map((e) => <BoardItem key={e.gameId} item={e}></BoardItem>)}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
