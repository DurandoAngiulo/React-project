import { useEffect } from "react";
import { createContext, useState } from "react";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";

let localState = {
  setGameData: (data) => {},
  gameData: [],
  sendChanges: (product) => {},
};

export const StateContext = createContext({
  gameData: [],
  setGameData: (data) => {},
  sendChanges: (product) => {},
});

export const StateContextProvider = ({ children }) => {
  const sendChanges = (product) => {
    let changedProduct = { ...product };
    delete changedProduct.keyName;
    setDoc(doc(db, "games", product.keyName), changedProduct)
      .then(() => {})
      .catch((reason) => console.log("error! " + reason));
  };
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
    sendChanges: sendChanges,
  };

  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
