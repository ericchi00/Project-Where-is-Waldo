import React from 'react';
import headerLogo from '../images/headerwaldo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="header">
				<p>Where is Waldo</p>
				<img src={headerLogo} alt="Waldo holding a cane and waving" />
			</div>
			<nav>
				<Link to="/">
					<li>Level 1</li>
				</Link>
				<Link to="/level2">
					<li>Level 2</li>
				</Link>
				<Link to="/level3">
					<li>Level 3</li>
				</Link>
				<Link to="/leaderboard">
					<li>Leaderboard</li>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
