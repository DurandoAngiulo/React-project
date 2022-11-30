import { useContext, useState } from "react";
import StateContext from "../../store.jsx";
import Layout from "../Layouts/layout.jsx";
import GameCard from "../GameCard/gameCard.jsx";
const Cart = () => {
  const state = useContext(StateContext);
  let userCart = state.userCart;
  let total = 0.0;
  return (
    <Layout>
      <div className="mt-5">
        {!userCart.length ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            {userCart.map(({ name, price, in_cart, gameImage }, index) => {
              total += price * in_cart;
              if (in_cart) {
                return (
                  <>
                    <GameCard name={name} price={price} source={gameImage} />
                    <span>x{in_cart}</span>
                  </>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
      <div>
        <h2>{total}</h2>
      </div>
    </Layout>
  );
};
export default Cart;
