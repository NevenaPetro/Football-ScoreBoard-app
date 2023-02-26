import React from 'react';
import Button from '../Button';
import { useContext } from 'react';
import { applicationContext } from '../../context/ApplicationContext';

function Modal({ data }) {
  const { scoreUpdate, setModalData } = useContext(applicationContext);
  let newHomeTeamScore;
  let newAwayTeamScore;
  function gameUpdate(e) {
    e.preventDefault();
    scoreUpdate(data.gameId, newHomeTeamScore, newAwayTeamScore);
    setModalData(null);
  }
  function handleHomeInputChange(e) {
    newHomeTeamScore = +e.target.value;
  }
  function handleAwayInputChange(e) {
    newAwayTeamScore = +e.target.value;
  }

  return (
    <>
      <form onSubmit={gameUpdate}>
        <p>{data.homeTeam}</p>
        <input
          type="text"
          placeholder={data.scoreHomeTeam}
          onChange={handleHomeInputChange}
        ></input>
        <input
          type="text"
          placeholder={data.scoreAwayTeam}
          onChange={handleAwayInputChange}
        ></input>
        <p>{data.awayTeam}</p>
        <Button type="submit">Update</Button>
      </form>
    </>
  );
}

export default Modal;
