import React from 'react'
import { useState, useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';
import Button from '../components/Button';

function CreateNewGame() {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [btnStartGameDisabled, setBtnStartGameDisabled] = useState(true);
    const [btnUpdateGameDisabled, setBtnUpdateGameDisabled] = useState(true);
    const [btnFinishGameDisabled, setBtnFinishGameDisabled] = useState(true);
    const [btnGetSummaryDisabled, setBtnGetSummaryDisabled] = useState(true);
  
    const { addNewGame } = useContext(ApplicationContext);
  
    function handleHomeTeamInput(e) {
      setHomeTeam(e.target.value);
    }
    function handleAwayTeamInput(e) {
      setAwayTeam(e.target.value);
    }
    function addGame(e) {
      e.preventDefault();
      if (homeTeam && awayTeam) {
        const newGame = {
          homeTeam,
          awayTeam,
          scoreHomeTeam: 0,
          scoreAwayTeam: 0,
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
        <Button isDisabled={btnGetSummaryDisabled}>Get Summary</Button>
      </form>
    </>
  )
}

export default CreateNewGame
