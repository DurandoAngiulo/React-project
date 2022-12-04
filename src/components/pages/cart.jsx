import { useContext, useState } from "react";
import StateContext from "../../store.jsx";
import Layout from "../Layouts/layout.jsx";
import CartGame from "../CartGame/cartGame.jsx";
import Footer from "../Footer/footer.jsx";
const Cart = () => {
  const state = useContext(StateContext);
  let userCart = state.userCart;
  let total = 0.0;
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Layout>
      <div className="top-spacer">
        <div className="row px-3">
          {!userCart.length ? (
            <p>Cart is empty</p>
          ) : (
            <div className="col-12 col-lg-8 d-flex flex-wrap justtify-content-start">
              {userCart.map(
                ({ name, price, in_cart, gameImage, amount }, index) => {
                  total += price * in_cart;
                  if (in_cart) {
                    return (
                      <>
                        <CartGame
                          name={name}
                          price={price}
                          source={gameImage}
                          amount={in_cart}
                        />
                      </>
                    );
                  }
                  return null;
                }
              )}
            </div>
          )}
          <div className="col-12 col-lg-4 mt-5 justify-content-center">
            <div className="darkgrey px-3 py-3 rounded">
              <h5 className="text-white  fw-lighter">
                Subtotal: {format(total)}
              </h5>
              <p className="text-white fw-light">
                Tax: <span className="ps-5">+ {format(total * 0.06)}</span>
              </p>
              <div className="d-flex justify-content-center">
                <div className="whiteLine my-2"></div>
              </div>
              <h2 className="text-white mt-1">
                Total: {format(total * 0.06 + total)}
              </h2>
              <div className="d-flex justify-content-start justify-content-center-lg">
                <button
                  type="button"
                  className="btn text-white background-red btn-danger mt-2"
                  onClick={() =>
                    alert("Congratulations, you have checked out! :)")
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Cart;
