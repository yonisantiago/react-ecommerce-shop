import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { OrderItem } from '../components/OrderItem';

import '../styles/MyOrder.scss';
import '../styles/Orders.scss';

export const Orders = () => {
	const {state} = useContext(AppContext)
  return (
    <div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
				{state.cart.length > 0 ? (
						state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						))
					) : (
						<p>Your cart is currently empty.</p>
					)}
				  <div className="order">
					  <p>
						  <span>Total</span>
					  </p>
					  <p>${state.total}</p>
				  </div>
				</div>
			</div>
	</div>
  )
}
