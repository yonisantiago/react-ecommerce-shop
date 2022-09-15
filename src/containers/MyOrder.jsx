import React, {useContext, useState} from 'react';
import { OrderItem } from '../components/OrderItem';
import '../styles/MyOrder.scss';
import Arrow from '@icons/flechita.svg'
import { AppContext } from '../context/AppContext';
import { Link, NavLink } from "react-router-dom";

export const MyOrder = ({toggleOrders, setToggleOrders}) => {

    const {state} = useContext(AppContext)

// we can use sumTotalCart function to display sum of total prices, but in the state we created a total sum, accesible when needed 
    const sumTotalCart = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }



  return (
      <aside className="MyOrder">
          <div className="title-container">
              <img src={Arrow} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
              <p className="title">My order</p>
          </div>
          <div className="my-order-content">
            
            <div className='cart-product-list'>
                { state.cart.length > 0 ? (
                    state.cart.map((product) => (
                        <OrderItem product={product} key={`orderItem-${product.id}`}/>
                    ))
                ) : (
                    <div>Your cart is currently empty.</div>
                )}
            </div>
          
            
             
              <div className="order">
                  <p>
                      <span>Total</span>
                  </p>
                  <p>${state.total}</p>
              </div>
              <button className="primary-button">
                <Link to="/checkout">Checkout</Link>
              </button>
          </div>
      </aside>
  )
}
