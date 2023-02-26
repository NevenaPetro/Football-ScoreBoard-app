import { ApplicationProvider } from './context/ApplicationContext';
import { useState } from 'react';
import BoardList from './components/BoardList';
import CreateNewGame from './components/CreateNewGame';
import Modal from './components/Modal/Modal';


function App() {
  const [listOfGames, setListOfGames] = useState([]);
  const [listOfAllGames, setListOfAllGames] = useState([]);
  const [gameId, setGameId] = useState(1);
  const [startGame, setStartGame] = useState({});
  const [modalData, setModalData] = useState(null);

  //adding new game to the listOfGames
  function addNewGame(newGame) {
    setListOfGames([...listOfGames, newGame]);
    setListOfAllGames([...listOfAllGames, newGame]);
  }

  //Strating game and setting enabling btnUpdate and btnFinish
  function gameStarting(item) {
    setStartGame(item);
    listOfGames.find((e) => e.gameId === item.gameId).started = true;
    setListOfGames(listOfGames);
    listOfAllGames.find((e) => e.gameId === item.gameId).started = true;
    setListOfAllGames(listOfAllGames);
  }
  //Finish game and removing game from the board
  function gameFinish(item) {
    setListOfGames(listOfGames.filter((e) => e.gameId !== item.gameId));
  }

  function scoreUpdate(id, newScoreHomeTeam, newScoreAwayTeam) {
    listOfGames.find((e) => e.gameId === id).scoreHomeTeam = newScoreHomeTeam;
    listOfGames.find((e) => e.gameId === id).scoreAwayTeam = newScoreAwayTeam;
    listOfGames.find((e) => e.gameId === id).scoreSum =
      newScoreHomeTeam + newScoreAwayTeam;
    setListOfGames([...listOfGames]);
    listOfAllGames.find((e) => e.gameId === id).scoreHomeTeam = newScoreHomeTeam;
    listOfAllGames.find((e) => e.gameId === id).scoreAwayTeam = newScoreAwayTeam;
    listOfAllGames.find((e) => e.gameId === id).scoreSum =
      newScoreHomeTeam + newScoreAwayTeam;
    setListOfAllGames([...listOfAllGames]);
  }
  function openModal(item) {
    setModalData(item);
  }
  function getSummary() {
    listOfAllGames.sort((a, b) => b.gameId - a.gameId)
    setListOfAllGames([...listOfAllGames.sort((a, b) => b.scoreSum - a.scoreSum)]);
  }

  return (
    <>
      <ApplicationProvider
        value={{
          gameId,
          listOfGames,
          listOfAllGames,
          addNewGame,
          setGameId,
          gameStarting,
          gameFinish,
          setModalData,
          openModal,
          scoreUpdate,
          getSummary,
        }}
      >
        <CreateNewGame />
        <BoardList />
        {modalData && <Modal data={modalData} />}
      </ApplicationProvider>
    </>
  );
}

export default App;
