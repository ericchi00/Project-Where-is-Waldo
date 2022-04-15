import {
	collection,
	getFirestore,
	orderBy,
	query,
	onSnapshot,
	getDoc,
	getDocs,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Leaderboard = (props) => {
	const [level1, setLevel1] = useState([]);
	const [level2, setLevel2] = useState([]);
	const [level3, setLevel3] = useState([]);

	useEffect(() => {
		const first = async () => {
			const waldo1 = collection(getFirestore(), 'Waldo 1');
			const level1Query = query(waldo1, orderBy('time'));
			return await getDocs(level1Query);
		};

		first().then((data) => {
			data.forEach((item) => {
				console.log(item._document.data.value.mapValue.fields);
			});
		});
	});

	return <div></div>;
};

export default Leaderboard;
