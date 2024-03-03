import { Route, Routes } from 'react-router-dom';
import Explore from './modules/Explore/views/Explore';
import Home from './modules/Home/views/Home';
import Search from './modules/Search/views/Search';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/search" element={<Search />} />
			<Route path="/explore" element={<Explore />} />
		</Routes>
	);
};

export default Router;
