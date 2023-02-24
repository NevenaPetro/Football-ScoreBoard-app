import { ApplicationProvider } from './context/ApplicationContext';
import { useState } from 'react';
import BoardList from './components/BoardList';
import CreateNewGame from './components/CreateNewGame';

function App() {
  const [listOfGames, setListOfGames] = useState([]);
  const [gameId, setGameId] = useState(1);
  
  const [btnUpdateScoreDisabled, setBtnUpdateScoreDisabled] = useState(true);
  const [btnFinishGameDisabled, setBtnFinishGameDisabled] = useState(true);
  const [startGame, setStartGame] = useState({
    game: {},
    start: false
  })
  
  function addNewGame(newGame) {
    setListOfGames([...listOfGames, newGame]);
  }
  function gameStarting(item) {
    setStartGame({
      item,
      start: true
    })
    //setBtnUpdateScoreDisabled(listOfGames.filter((item) => item.gameId === gameId));
    //setBtnFinishGameDisabled(listOfGames.filter((item) => item.gameId === gameId));
  }
  return (
    <>
      <ApplicationProvider
        value={{
          addNewGame,
          listOfGames,
          setGameId,
          gameId,
          gameStarting,
          
          btnUpdateScoreDisabled,
          btnFinishGameDisabled,
        }}
      >
        <CreateNewGame />
        <BoardList />
      </ApplicationProvider>
    </>
  );
}

export default App;
