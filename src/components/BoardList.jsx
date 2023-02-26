import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import BoardItem from './BoardItem';
import SummaryBoardItem from './SummaryBoardItem';


function BoardList() {
  const { listOfGames, listOfAllGames } = useContext(applicationContext);

  return (
    <div>
      <table>
        <tbody>
          {listOfGames &&
            listOfGames.map((e) => <BoardItem key={e.gameId} item={e}></BoardItem>)}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <h2> Football World Cup Score Board </h2>
      <table>
        <tbody>
          {listOfAllGames &&
            listOfAllGames.map((e) => <SummaryBoardItem key={e.gameId} item={e}></SummaryBoardItem>)}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
