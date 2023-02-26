import React from 'react';
import { useState, useContext } from 'react';
import { applicationContext } from '../context/ApplicationContext';
import Button from '../components/Button';

function CreateNewGame() {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const { addNewGame, gameId, setGameId, listOfAllGames, getSummary } =
    useContext(applicationContext);
  function handleHomeTeamInput(e) {
    setHomeTeam(e.target.value);
  }
  function handleAwayTeamInput(e) {
    setAwayTeam(e.target.value);
  }
  function addGame(e) {
    e.preventDefault();
    if (homeTeam && awayTeam) {
      setGameId(gameId + 1);
      const newGame = {
        gameId,
        homeTeam,
        awayTeam,
        scoreHomeTeam: 0,
        scoreAwayTeam: 0,
        scoreSum: 0,
        started: false,
        finished: false,
      };
      addNewGame(newGame);
    }
  }
  return (
    <>
      <form onSubmit={addGame}>
        <p>Create game</p>
        <input
          onChange={handleHomeTeamInput}
          type="text"
          placeholder="home team"
          value={homeTeam}
        />
        <input
          onChange={handleAwayTeamInput}
          type="text"
          placeholder="away team"
          value={awayTeam}
        />
        <Button type="submit">Add game</Button>
      </form>
      <Button
        type={'button'}
        handleClick={() => {
          getSummary();
        }}
        isDisabled={!listOfAllGames.length}
      >
        Get Summary
      </Button>
    </>
  );
}

export default CreateNewGame;
