import {
	collection,
	getFirestore,
	orderBy,
	query,
	getDocs,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Leaderboard = (props) => {
	const [level1, setLevel1] = useState([]);
	const [level2, setLevel2] = useState([]);
	const [level3, setLevel3] = useState([]);

	useEffect(() => {
		let level1leaderboard = [];
		let level2leaderboard = [];
		let level3leaderboard = [];

		const querySearch = async (levelName) => {
			const waldo = collection(getFirestore(), levelName);
			const search = query(waldo, orderBy('time'));
			return await getDocs(search);
		};

		const allLevelQuery = async () => {
			const firstResult = await querySearch('Waldo 1').then((data) => {
				data.forEach((item) => {
					level1leaderboard.push(item._document.data.value.mapValue.fields);
				});
			});
			const secondResult = await querySearch('Waldo 2').then((data) => {
				data.forEach((item) => {
					level2leaderboard.push(item._document.data.value.mapValue.fields);
				});
			});
			const thirdResult = await querySearch('Waldo 3').then((data) => {
				data.forEach((item) => {
					level3leaderboard.push(item._document.data.value.mapValue.fields);
				});
			});
			setLevel1(level1leaderboard);
			setLevel2(level2leaderboard);
			setLevel3(level3leaderboard);
		};

		allLevelQuery();
	}, []);

	return (
		<div className="leaderboard">
			<ul className="first-leaderboard">
				<h3>Level 1 Leaderboard</h3>
				{level1.map((item, i) => {
					return (
						<li key={i}>
							<h4>{item.name.stringValue}</h4>
							<h4>{item.time.integerValue  / 1000}s</h4>
						</li>
					);
				})}
			</ul>
			<ul className="second-leaderboard">
				<h3>Level 2 Leaderboard</h3>
				{level2.map((item, i) => {
					return (
						<li key={i}>
							<h4>{item.name.stringValue}</h4>
							<h4>{item.time.integerValue / 1000}s</h4>
						</li>
					);
				})}
			</ul>
			<ul className="third-leaderboard">
				<h3>Level 3 Leaderboard</h3>
				{level3.map((item, i) => {
					return (
						<li key={i}>
							<h4>{item.name.stringValue}</h4>
							<h4>{item.time.integerValue / 1000}s</h4>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Leaderboard;
