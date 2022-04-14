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
				<Route path="/" element={<Level img={level1} />} />
				<Route path="/level2" element={<Level img={level2} />} />
				<Route path="/level3" element={<Level img={level3} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
