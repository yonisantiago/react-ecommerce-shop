import React from 'react';
import '@styles/MobileMenu.scss'
import { Link } from 'react-router-dom';

export const MobileMenu = ({toggleMobileMenu}) => {
  return (
    <div className="mobile-menu">
        <ul>
            <li>
                <a href="/">CATEGORIES</a>
            </li>
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

        <ul>
            <li>
                <Link  to="/orders" onClick={()=> toggleMobileMenu()}>My orders</Link>
            </li>
            <li>
                <Link to="/account" onClick={()=> toggleMobileMenu()}>My account</Link>
            </li>
        </ul>

        <ul>
            <li>
                <p className="email">john@doe.com</p>
            </li>
            <li>
                <Link to="/" className="sign-out" onClick={()=> toggleMobileMenu()}>Sign out</Link>
            </li>
        </ul>

    </div>
  )
}
//        <span class="close-button">X</span>