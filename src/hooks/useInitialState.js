import { useState } from "react";

const initialState = {
    cart: [],
    lastIdRemoved: -1,
    total: 0,
};

export const useInitialState = () => {

    const[state, setState] = useState(initialState)

    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
            setState({
                ...state,
                cart: [...state.cart, payload],
                total: state.total + payload.price,
            });
        }
        
    };

    const removeFromCart = (payload) =>{
		// const newArray = state.cart.filter(product => product != payload);
		// setState({
		// 	...state,
		// 	cart: [...newArray],
        //     total: state.total - payload.price,
		// });
        const fooIdx = state.cart.findIndex(({id})=> payload.id===id)

     if(fooIdx>-1){
         let foo=[...state.cart]
         foo.splice(fooIdx,1)
         setState({
              ...state,
              cart: [...foo],
              total: state.total - payload.price
              ,lastIdRemoved:payload.id
           })
     }
    }

    return{
        state,
        addToCart, 
        removeFromCart,
    }


};
