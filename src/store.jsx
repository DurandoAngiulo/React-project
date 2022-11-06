import { useEffect } from "react";
import { createContext, useState } from "react";

let localState = {
  setGameData: (data) => {},
  gameData: [],
};

export const StateContext = createContext({
  gameData: [],
  setGameData: (data) => {},
});

export const StateContextProvider = ({ children }) => {
  useEffect(() => {
    localState = initialState;
  }, []);
  const setGameData = (data) => {
    localState.gameData = data;
    setState({ ...localState });
  };

  const initialState = {
    gameData: [],
    setGameData: setGameData,
  };

  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
