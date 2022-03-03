import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addItemQty, subtractItemQty } from '../../redux/cart/cartActions'

export default function CartItem({p}) {

  const dispatch = useDispatch();
  let qty = p.qty

  return (
    <div>
      <h3>{p.name}</h3>
      <h2>${p.price * p.qty}.00</h2>
      <label>Qty</label>
      <button onClick={() => dispatch(addItemQty(p.id))}>+</button>
      <input type="text" value={qty}/>
      <button disabled={qty === 1} onClick={() => dispatch(subtractItemQty(p.id))}>-</button>
      <br />
      <button onClick={() => dispatch(removeFromCart(p.id))}>Borrar</button>
    </div>
  );
}