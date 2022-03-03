import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cart);

  return (
    <div>
      <h1>CART</h1>

      <h3>Mis productos</h3>
      <h3>
        PRECIO TOTAL{" "}
        {cartItems
          .map((el) => el.qty * el.price)
          .reduce((prev, curr) => prev + curr, 0)}
      </h3>
      <div className={styles.homeFlex}>
        {cartItems ? (
          cartItems.map((p, index) => {
            return (
              <div className={styles.eachProduct} key={index}>
                <CartItem p={p} />
              </div>
            );
          })
        ) : (
          <p>No hay productos cargados</p>
        )}
      </div>
    </div>
  );
}
