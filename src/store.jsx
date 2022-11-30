import { useEffect } from "react";
import { createContext, useState } from "react";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";

let localState = {
  setGameData: (data) => {},
  gameData: [],
  sendChanges: (product) => {},
  userCart: [],
  addToCart: (name) => {},
  setUserCart: (cart) => {},
  initalizeCart: () => {},
};

export const StateContext = createContext({
  gameData: [],
  setGameData: (data) => {},
  sendChanges: (product) => {},
  userCart: [],
  addToCart: (name) => {},
  setUserCart: (cart) => {},
  initalizeCart: () => {},
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

  const setUserCart = (cart) => {
    localState.userCart = cart;
    setState({ ...localState });
  };

  const addToCart = (name) => {
    const cart = localState.userCart;
    cart.forEach((game) => {
      if (game.name === name) game.in_cart++;
    });
    setUserCart(cart);
    console.log("teteygdeydg");
  };
  const initalizeCart = () => {
    const shoppingCart = localState.gameData.map((game) => ({
      ...game,
      in_cart: 0,
    }));
    setUserCart(shoppingCart);
  };

  const initialState = {
    gameData: [],
    setGameData: setGameData,
    sendChanges: sendChanges,
    userCart: [],
    addToCart: addToCart,
    setUserCart: setUserCart,
    initalizeCart: initalizeCart,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state.userCart);
  }, [state]);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
