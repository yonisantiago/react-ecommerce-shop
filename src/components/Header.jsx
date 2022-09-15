import React, {useState, useContext} from 'react';
import { Menu } from './Menu';
import '@styles/Header.scss';
import Logo from '@logos/logo_yard_sale.svg'
import menuIcon from '@icons/icon_menu.svg';
import Cart from '@icons/icon_shopping_cart.svg'
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';
import { MobileMenu } from './MobileMenu';

export const Header = () => {

    const [toggle, setToggle] = useState(false);//show user menu my orders, my account, sign out

    const [toggleOrders, setToggleOrders] = useState(false);// show products in cart orders

    const [toggleNavBar, setToggleNavBar] = useState(false)// show menu in hamburger toggle 

    const {state} = useContext(AppContext);

    const handleToggle = () =>{
        setToggle(!toggle);

    };

    const toggleMobileMenu = () =>{
        toggleNavBar && setToggleNavBar(!toggleNavBar)
    }

    // const handleToggleNavBar = () => {
    //     setToggleNavBar(!toggleNavBar)
    // }


    return (

      <nav>
    
            <img src={menuIcon} alt="menu" className="menu" onClick={()=>setToggleNavBar(!toggleNavBar)}/>
      

         
          <div className="navbar-left">

                <Link to="/">
                    <img src={Logo} alt="logo" className="nav-logo" />
                </Link>

              
              <ul>
                  <li>
                      <a href="/">All</a>
                  </li>
                  <li>
                      <a href="/">Clothes</a>
                  </li>
                  <li>
                      <a href="/">Electronics</a>
                  </li>
                  <li>
                      <a href="/">Furnitures</a>
                  </li>
                  <li>
                      <a href="/">Toys</a>
                  </li>
                  <li>
                      <a href="/">Others</a>
                  </li>
              </ul>
          </div>
          <div className="navbar-right">
              <ul>
                  <li className="navbar-email" onClick={handleToggle}>
                     user@example.com
                  </li>
                  <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                      <img src={Cart} alt="shopping cart" />
                     {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                  </li>
              </ul>
          </div>
          {toggleNavBar && <MobileMenu toggleMobileMenu={toggleMobileMenu}/>}
            { toggle && <Menu />}
            { toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
            
          
      </nav>

  )
}
