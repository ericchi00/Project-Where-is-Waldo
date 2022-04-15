import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Level from './components/Level';
import Header from './components/Header';
import level1 from './images/waldo1.png';
import level2 from './images/waldo2.jpeg';
import level3 from './images/waldo3.jpeg';
import Leaderboard from './components/Leaderboard';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Level
							img={level1}
							key="1"
							coordsStart={[210, 270]}
							coordsEnd={[150, 195]}
							title="Waldo 1"
						/>
					}
				/>
				<Route
					path="/level2"
					element={
						<Level
							img={level2}
							key="2"
							coordsStart={[925, 960]}
							coordsEnd={[265, 290]}
							title="Waldo 2"
						/>
					}
				/>
				<Route
					path="/level3"
					element={
						<Level
							img={level3}
							key="3"
							coordsStart={[1140, 1180]}
							coordsEnd={[215, 260]}
							title="Waldo 3"
						/>
					}
				/>
				<Route path="/leaderboard" element={<Leaderboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
