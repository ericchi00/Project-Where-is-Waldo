import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Level from './components/Level';
import Header from './components/Header';
import level1 from './images/waldo1.png';
import level2 from './images/waldo2.jpeg';
import level3 from './images/waldo3.jpeg';

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
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
