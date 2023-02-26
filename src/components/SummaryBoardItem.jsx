import React from 'react';


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
