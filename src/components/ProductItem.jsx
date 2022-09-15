import React, {useState, useContext, useEffect} from 'react';
import '../styles/ProductItem.scss';
import BtnAddToCart from '@icons/bt_add_to_cart.svg';
import BtnAddedToCart from '@icons/bt_added_to_cart.svg'
import {AppContext} from '../context/AppContext';

export const ProductItem = ({product}) => {

	const {addToCart, removeFromCart, state} = useContext(AppContext);
	// const [addedToCart, setAddedToCart] = useState(false)
	
	
	const handleAdd= item => {
		isProductAdded() ? removeFromCart(item) : addToCart(item)
	}

//Funcion para que busque en el contexto si existe el producto en el carrito
	const isProductAdded = () => state.cart.some( (item) => item.id === product.id ? true : false );

	// reacciona cuando se cambio el ultimo lastIdRemove 
	useEffect(() => {
		if (state.lastIdRemoved === product.id) {
			isProductAdded(false)
		}
	}, [state.lastIdRemoved])

	//  1ra carga del componente y va segundo porque si queda un lastIdRemove, sea rectificado
	useEffect(() => {
		if (state.cart.some(({ id }) => id === product.id)) {
			isProductAdded(true)
		}
	}, [])

	// const handleRemove = item => {
	// 	removeFromCart(item);
	// 	setAddedToCart(false);
	// }
	
	const productImage = `https://placem.at/things?w=500&random=item/`
	;

  return (
	  <div className="ProductItem">
		  <img src={product.images.length !== 0 ? productImage : `https://bitsofco.de/content/images/2018/12/broken-1.png`} alt={product.title} />
		  <div className="product-info">
			  <div>
				  <p>${product.price}</p>
				  <p>{product.title}</p>
			  </div>
			  
				<figure className='hover-animation' onClick={() => handleAdd(product)} >
					{ isProductAdded() ? (
						<img src={BtnAddedToCart} alt="added to cart" />
					) : (
						<img src={BtnAddToCart} alt="add to cart" />
					)
				}
				
				
					
				</figure>
				
			 
			 
		  </div>
	  </div>
  )
}
