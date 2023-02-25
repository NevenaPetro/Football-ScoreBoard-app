import { ApplicationProvider } from './context/ApplicationContext';
import { useState } from 'react';
import BoardList from './components/BoardList';
import CreateNewGame from './components/CreateNewGame';

function App() {
  const [listOfGames, setListOfGames] = useState([]);
  const [listOfAllGames, setListOfAllGames] = useState([]);
  const [gameId, setGameId] = useState(1);
  const [startGame, setStartGame] = useState({});

  //adding new game to the listOfGames
  function addNewGame(newGame) {
    setListOfGames([...listOfGames, newGame]);
    setListOfAllGames([...listOfAllGames, newGame]);
  }
  //Strating game and setting enabling btnUpdate and btnFinish
  function gameStarting(item) {
    setStartGame(item);
    listOfGames.filter(
      (e) => e.btnUpdateId === item.gameId
    )[0].btnUpdateDisabled = false;
    listOfGames.filter(
      (e) => e.btnFinishId === item.gameId
    )[0].btnFinishDisabled = false;
  }
  //Finish game and removing game from the board
  function gameFinish(item) {
    setListOfGames(listOfGames.filter(
      (e) => e.gameId !== item.gameId
    ))
  }
  /*
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
          gameStarting,
          gameFinish
        }}
      >
        <CreateNewGame />
        <BoardList />
      </ApplicationProvider>
    </>
  );
}

export default App;
