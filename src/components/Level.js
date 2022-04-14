import React, { useEffect, useState } from 'react';

const Level = ({ img }) => {
	const [startGame, setStartGame] = useState(false);
	const [win, setWin] = useState(false);
	const [timer, setTimer] = useState();

	const pictureHandler = (e) => {
		const x = e.nativeEvent.offsetX;
		const y = e.nativeEvent.offsetY;
		if (x === y) {
			setWin(true);
		}
	};

	const startGameHandler = (e) => {
		e.preventDefault();
		setStartGame(true);
	};
	return (
		<div className="waldo-img-wrapper">
			{startGame ? (
				<>
					<img src={img} alt="Where's Waldo" onClick={pictureHandler} />
					{win ? (
						<div className="win">
							<form>
								<label htmlFor="name">
									Enter your name to be put onto the leaderboard!
								</label>
								<input id="name" name="name" type="text" />
							</form>
						</div>
					) : null}
				</>
			) : (
				<div className="start-game">
					<p>
						In order to win, you'll need to click on Waldo. Timer is started as
						soon as you press start.
					</p>
					<button
						type="button"
						className="button-start"
						onClick={startGameHandler}
					>
						Start game
					</button>
				</div>
			)}
		</div>
	);
};

export default Level;
