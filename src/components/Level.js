import React, { useEffect, useState } from 'react';

const Level = ({ img, coordsStart, coordsEnd }) => {
	const [startGame, setStartGame] = useState(false);
	const [win, setWin] = useState(false);
	const [running, setRunning] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [running]);

	const pictureHandler = (e) => {
		const x = e.nativeEvent.offsetX;
		const y = e.nativeEvent.offsetY;
		if (
			x > coordsStart[0] &&
			x < coordsStart[1] &&
			y > coordsEnd[0] &&
			y < coordsEnd[1]
		) {
			console.log('you win');
		}
	};

	const startGameHandler = (e) => {
		e.preventDefault();
		setRunning(true);
		setStartGame(true);
	};
	return (
		<div className="waldo-img-wrapper">
			<div className="timer">
				<span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
				{/* <span>{('0' + ((time / 10) % 100)).slice(-2)}</span> */}
			</div>
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
						soon as you press start. There is always one Waldo with glasses in
						each level.
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
