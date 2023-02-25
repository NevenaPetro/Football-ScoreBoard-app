import { ApplicationProvider } from './context/ApplicationContext';
import { useState } from 'react';
import BoardList from './components/BoardList';
import CreateNewGame from './components/CreateNewGame';

function App() {
  const [listOfGames, setListOfGames] = useState([]);
  const [gameId, setGameId] = useState(1);
  const [startGame, setStartGame] = useState({});

  function addNewGame(newGame) {
    setListOfGames([...listOfGames, newGame]);
  }
  function gameStarting(item) {
    setStartGame(item);
    listOfGames.filter(
      (e) => e.btnUpdateId === item.gameId
    )[0].btnUpdateDisabled = false;
    listOfGames.filter(
      (e) => e.btnFinishId === item.gameId
    )[0].btnFinishDisabled = false;
  }
 /* function gameUpdating(item) {

  }
  function gameFinishing(item) {
    
  }*/
  return (
    <>
      <ApplicationProvider
        value={{
          addNewGame,
          listOfGames,
          setGameId,
          gameId,
          gameStarting
        }}
      >
        <CreateNewGame />
        <BoardList />
      </ApplicationProvider>
    </>
  );
}

export default App;
