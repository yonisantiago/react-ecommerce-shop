import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Menu.scss';


export const Menu = () => {
  return (
    <div className="Menu"> 
			<ul>
				<li>
					<Link to="/orders" className="title">My orders</Link>
				</li>
				<li>
					<Link to="/account">My account</Link>
				</li>
				<li>
					<Link to="/">Sign out</Link>
				</li>
			</ul>
	</div>
  )
}
