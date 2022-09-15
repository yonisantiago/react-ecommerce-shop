import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/OrderItem.scss';
import Iconclose from '@icons/icon_close.png'

export const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);
	//const {addedToCart, setAddedToCart} = useState(false)

	const handleRemove = item => {
		removeFromCart(item);
	//	setAddedToCart(false)
	
	}

  return (
    <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={Iconclose} className="pointer" alt="close" onClick={() => handleRemove(product)} />
		</div>
  )
}
