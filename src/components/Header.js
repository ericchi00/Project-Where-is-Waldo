import React from 'react';
import headerLogo from '../images/headerwaldo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	// sets which level/page is currently active
	const setActive = (id) => {
		const navLinks = document.querySelectorAll('li');
		navLinks.forEach((link) => {
			link.style.backgroundColor = '#29a0f521';
		});
		navLinks[id].style.backgroundColor = '#123f5f21';
	};

	return (
		<header>
			<div className="header">
				<p>Where is Waldo</p>
				<img src={headerLogo} alt="Waldo holding a cane and waving" />
			</div>
			<nav>
				<Link to="/">
					<li id="level1" onClick={() => setActive(0)}>
						Level 1
					</li>
				</Link>
				<Link to="/level2">
					<li id="level2" onClick={() => setActive(1)}>
						Level 2
					</li>
				</Link>
				<Link to="/level3">
					<li id="level3" onClick={() => setActive(2)}>
						Level 3
					</li>
				</Link>
				<Link to="/leaderboard">
					<li id="leaderboard" onClick={() => setActive(3)}>
						Leaderboard
					</li>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
