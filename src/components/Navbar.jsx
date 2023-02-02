import React from 'react';
import { ReactComponent as EarthLogo } from '../assets/earthLogo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="Navbar">
			<EarthLogo className="Navbar-logo"/>
			<div className="Navbar-links">
				<NavLink to="/" className={(nav) => nav.isActive ? "link link-active" : "link"}>
					<span className="link-value">Home</span>
				</NavLink>
				<NavLink to="/about" className={(nav) => nav.isActive ? "link link-active" : "link"}>
					<span className="link-value">About</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;