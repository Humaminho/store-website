import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import Nav from './Nav'
import Cart from './Cart'
import DarkMode from './DarkMode'

export default function Header() {
  return (
		<div className="header" id='top'>
			<div className="logo">
				<Link to="/">
					<img src='/src/assets/brand/logo.svg' height={40} alt="logo" />
				</Link>
			</div>
			<Nav />
			<div className="nav-right">
        <DarkMode />
				<Cart />
				<Burger />
			</div>
		</div>
  );
}
