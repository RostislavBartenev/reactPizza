import React from "react";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem/CartItem";
import {Link} from "react-router-dom";
import {CartRemoveAll} from "./CartRemoveAll";
import CartTitle from "./CartTitle";
import {addItem, removeAll, removeGroup, removeItem} from "../../../redux/actions/cart";

const Cart = () => {

  const {totalPrice, totalCount, items} = useSelector(({cart}) => cart)

  const addedPizzas = Object.keys(items).map(key => items[key][0])

  const dispatch = useDispatch()

  const handlerRemoveAll = () => {
    dispatch(removeAll())
  }

  const handlerRemoveGroup = (id) => {
    dispatch(removeGroup(id))
  }

  const handlerRemoveItem = id => {
    dispatch(removeItem(id))
  }

  const handlerAddItem = id => {
    dispatch(addItem(id))
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <CartTitle />
          <CartRemoveAll onClickRemoveAll={handlerRemoveAll} />
        </div>
        <div className="content__items">
          {addedPizzas.map(obj => <CartItem onClickRemoveItem={handlerRemoveItem} onClickAddItem={handlerAddItem} onClickRemoveGroup={handlerRemoveGroup} key={obj.id} count={items[obj.id].length} {...obj} />)}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span> Всего пицц: <b>{totalCount} шт.</b> </span>
            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>

              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart