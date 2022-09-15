import React, { useContext } from 'react';
import {OrderItem} from '../components/OrderItem';
import {Menu} from '../components/Menu';
import '../styles/MyOrder.scss';
import '../styles/Checkout.scss';
import { AppContext } from '../context/AppContext';

export const Checkout = () => {
	const {state} = useContext(AppContext)
	

  return (
    <div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">Checkout</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.21</span>
							<span>{state.cart.length} articles</span>
						</p>
						<p>${state.total}</p>
					</div>
				</div>
			  {state.cart.length > 0 ? (
				  state.cart.map((product) => (
					  <OrderItem product={product} key={`orderItem-${product.id}`} />
				  ))
				  
			  ) : (
				  <div>Your cart is currently empty.</div>
			  )}
			  <div> <button className="primary-button">Pay Now</button> </div>
			 
			</div>
		</div>
  )
}
