import { ApplicationProvider } from './context/ApplicationContext';
import { useState } from 'react';
import BoardList from './components/BoardList';
import CreateNewGame from './components/CreateNewGame';

function App() {
  const [listOfGames, setListOfGames] = useState([]);
  
  function addNewGame(newGame) {
    setListOfGames([newGame, ...listOfGames]);
  }
  return (
    <>
      <ApplicationProvider
        value={{
          addNewGame,
          listOfGames,
        }}
      >
        <CreateNewGame />
        <BoardList />
      </ApplicationProvider>
    </>
  );
}

export default App;
