import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Level = ({ img, coordsStart, coordsEnd, title }) => {
	const [startGame, setStartGame] = useState(false);
	const [win, setWin] = useState(false);
	const [running, setRunning] = useState(false);
	const [time, setTime] = useState(0);
	const [name, setName] = useState();

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
			x >= coordsStart[0] &&
			x <= coordsStart[1] &&
			y >= coordsEnd[0] &&
			y <= coordsEnd[1]
		) {
			setRunning(false);
			setWin(true);
		}
	};

	const startGameHandler = (e) => {
		e.preventDefault();
		setRunning(true);
		setStartGame(true);
	};

	const nameHandler = (e) => {
		setName(e.target.value);
	};

	const onSubmit = (e) => {
		saveScore(time, name);
		const navLinks = document.querySelectorAll('li');
		navLinks.forEach((link) => {
			link.style.backgroundColor = '#29a0f521';
		});
		navLinks[3].style.backgroundColor = '#123f5f21';
	};

	async function saveScore(time, name) {
		try {
			console.log(name);
			await addDoc(collection(getFirestore(), title), {
				name: name,
				time: time,
				timestamp: serverTimestamp(),
			});
		} catch (error) {
			console.error('error writing name to firebase database', error);
		}
	}
	return (
		<div className="waldo-img-wrapper">
			<div className="timer">
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
				{/* <span>{('0' + ((time / 10) % 100)).slice(-2)}</span> */}
			</div>
			{startGame ? (
				<>
					<img src={img} alt="Where's Waldo" onClick={pictureHandler} />
					{win ? (
						<div className="win">
							<form action="/leaderboard">
								<div className="win-timer">
									<span>
										{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
									</span>
									<span>
										{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
									</span>
									<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
								</div>
								<div className="MM_SS_MS">(mm:ss:ms)</div>
								<label htmlFor="name">
									Enter your name to be put onto the leaderboard!
								</label>
								<input
									id="name"
									name="name"
									type="text"
									onChange={(e) => nameHandler(e)}
								/>
								<Link to="/leaderboard/">
									<button
										type="button"
										className="leaderboard-submit"
										onClick={(e) => onSubmit(e)}
									>
										Submit
									</button>
								</Link>
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
