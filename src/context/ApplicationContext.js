import React from 'react';
import { createContext, useState } from 'react';
export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [listOfGames, setListOfGames] = useState([]);
  function addNewGame (newGame) {
    setListOfGames([newGame, ...listOfGames]);
  }

  return (
    <ApplicationContext.Provider
      value={{
        addNewGame,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;
